import { EBlockState, IBlock, IBlockConfig } from "@/lib/types"
import { useEffect, useRef } from "react"
import { BlockIO } from "./BlockIO"
import { BLockHeader } from "./Components"
import { AddBlock } from "./NewBlock"


export function Block(props: {
  block: IBlock
  pos: number
  runBlock: () => Promise<void>
  updateBlock: (block: IBlock) => void
  addBlock: (pos: number, name: string) => void
  removeBlock: (name: string) => void
  renameBlock: (text: string) => void
  isDragging: boolean
  saveBlock: (block: IBlock) => void
}) {

  const blockRef = useRef<HTMLDivElement>(null)
  const isSaved = props.block.savedName !== null

  useEffect(() => {
    if (props.block.cache && props.block.cache.state === EBlockState.Running) {
      blockRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [props.block.cache])

  function updateConfig(config: IBlockConfig) {
    props.updateBlock({
      ...props.block,
      config: config,
      cache: {
        output: props.block.cache?.output || '',
        state: config.inputs.every(
          (elem) => (elem === ''))
          ? EBlockState.Empty
          : EBlockState.NewInput
      }
    })
  }


  function handleRemove() {
    props.removeBlock(props.block.name)
  }

  return (
    <div ref={blockRef} className="block cursor-grab">
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full bg-white/5 rounded-2xl p-4 flex flex-col relative gap-4">
          <BLockHeader block={props.block}
            pos={props.pos}
            handleRemove={handleRemove}
            rename={props.renameBlock}
            runBlock={props.runBlock}
            isSaved={isSaved}
            saveBlock={() => props.saveBlock(props.block)}
          />
          <BlockIO
            block={props.block}
            update={updateConfig}
            stale={
              (props.block.cache.output != "") &&
              (props.block.cache.state === EBlockState.NewInput)
            }
            isSaved={isSaved}
          />
        </div>
        <div className={`${props.isDragging ? 'hidden' : 'block'}`}>
          <AddBlock add={(name: string) => { props.addBlock(props.pos + 1, name) }} />
        </div>
      </div>
    </div >
  )
}