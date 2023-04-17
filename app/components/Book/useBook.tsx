import { db } from "@/lib/db"
import { emptyBlock } from "@/lib/default"
import { runAskAI, runCallAPI, runFormatText } from "@/lib/func"
import { EBlockState, EBlockType, IBlock, IBlockConfig, IBlockSaved } from "@/lib/types"
import { deepCopy, getVars, openAICall, sleep } from "@/lib/utils"
import { useLiveQuery } from "dexie-react-hooks"
import { nanoid } from "nanoid"

export function useBook(props: {
  bookId: string
}) {

  const book = useLiveQuery(
    () => db.books.get(props.bookId),
    [props.bookId]
  )

  const savedBlocks = useLiveQuery(
    () => db.blocks.toArray()
  )

  async function toggleSave(block: IBlock) {
    if (!book) return
    const inputs = block.config.inputs

    if (!block.savedName) {

      const _vars = inputs.map(x => getVars(x)).flat()
      const vars = [...new Set(_vars)]

      const newInputs = inputs.map(x => {
        vars.forEach(v => {
          x = x.replaceAll(`{${v}}`, `[[${v}]]`)
        })
        return x
      })

      const varObj = vars.reduce((acc: { [key: string]: string }, v: string) => {
        acc[v] = ''
        return acc
      }, {})

      block.config = {
        inputs: newInputs,
        vars: varObj
      }

      block.savedName = block.name
      await db.blocks.put({
        name: block.name,
        type: block.type,
        config: block.config
      })
    } else {
      const newInputs = inputs.map(x => {
        Object.keys(block.config.vars).forEach(v => {
          x = x.replaceAll(`[[${v}]]`, `{${v}}`)
        })
        return x
      })

      block.config = {
        inputs: newInputs,
        vars: {}
      }

      block.savedName = null
      await db.blocks.delete(block.name)
    }
    await updateBlock(block)
  }

  async function rename(text: string) {
    if (!book) return
    book.name = text
    await db.books.update(book.id, book)
  }

  async function describe(text: string) {
    if (!book) return
    book.description = text
    await db.books.update(book.id, book)
  }

  async function updateBlock(block: IBlock) {
    if (!book) return
    const index = book.blocks.findIndex((b: IBlock) => b.name === block.name)
    if (index !== -1) {
      book.blocks[index] = block
      await db.books.update(book.id, book)
    }
  }

  async function renameBlock(text: string, pos: number) {
    if (!book) return
    book.blocks[pos].name = text
    await db.books.update(book.id, book)
  }

  async function generateBlocks(description: string) {
    if (!book) return
    const apiKey = await db.config.get('openai')
    const blocks = await openAICall(description, apiKey?.value || '')
    book.blocks = JSON.parse(blocks)
    await db.books.update(book.id, book)
  }

  async function runBook() {
    if (!book) return
    const bookVars: any = {}
    const blocks: IBlock[] = book.blocks
    for (const block of blocks) {
      bookVars[block.name] = await _runBlock(block, bookVars)
    }
    await db.books.update(book.id, book)
  }

  async function _runBlock(block: IBlock, varStore: any) {
    const cache = {
      state: EBlockState.Running,
      output: null
    }
    block.cache = cache
    await updateBlock(block)
    await sleep(1000)
    try {
      switch (block.type) {
        case EBlockType.FormatText:
          block.cache.output = await runFormatText(block, varStore)
          break
        case EBlockType.CallAPI:
          block.cache.output = await runCallAPI(block, varStore)
          break
        case EBlockType.AskAI:
          block.cache.output = await runAskAI(block, varStore)
          break
      }
      block.cache.state = EBlockState.Success
    } catch (error) {
      block.cache.state = EBlockState.Error
      block.cache.output = error instanceof Error
        ? `Error: ${error.message}`
        : 'Error: Unknown error occurred'
    }
    await updateBlock(block)
    return block.cache.output
  }

  async function addBlock(pos: number, name: string) {
    if (!book || !savedBlocks) return
    const isSaved = !Object.values(EBlockType).includes(name as EBlockType)
    const saved = savedBlocks.find((b: IBlockSaved) => b.name === name)

    const newBlock: IBlock = deepCopy(emptyBlock)

    if (isSaved) {
      newBlock.name = `${'block_' + nanoid().slice(0, 2).toString()}`
      newBlock.savedName = name
      newBlock.type = saved?.type as EBlockType
      newBlock.config = saved?.config as IBlockConfig
    } else {
      newBlock.name = 'block_' + nanoid().slice(0, 2).toString()
      newBlock.type = name as EBlockType
    }

    book.blocks.splice(pos, 0, newBlock)
    book.updatedAt = (new Date()).toISOString()
    await db.books.update(book.id, book)
  }

  async function removeBlock(name: string,) {
    if (!book) return
    if (book.blocks.length === 1) return
    book.blocks = book.blocks
      .filter((b: IBlock) => b.name !== name)
      .map((b: IBlock, i: number) => ({ ...b, id: i }))
    book.updatedAt = (new Date()).toISOString()
    await db.books.update(book.id, book)
  }

  async function clearBook() {
    if (!book) return
    const newBlock: IBlock[] = book.blocks.map((b: IBlock) => ({
      ...b,
      cache: {
        state: b.config.inputs.every((elem) => (elem === ''))
          ? EBlockState.Empty
          : EBlockState.NewInput,
        output: ''
      }
    }))
    book.blocks = newBlock
    await db.books.update(book.id, book)
  }

  async function runBlock(name: string) {
    if (!book) return
    const runVars: any = book.blocks.reduce((acc: any, b: IBlock) => {
      acc[b.name] = b.cache ? b.cache.output : ''
      return acc
    }, {})
    const block = book.blocks.find((b: IBlock) => b.name === name) as IBlock
    await _runBlock(block, runVars)
  }

  return {
    book,
    rename,
    describe,
    addBlock,
    removeBlock,
    clearBook,
    runBlock,
    runBook,
    updateBlock,
    renameBlock,
    saveBlock: toggleSave
  }
}