import Dexie, { Table } from 'dexie'
import { nanoid } from "nanoid"
import { defaultBooks } from './default'
import { savedBlocks } from "./saved"
import { IBlockSaved, IBook } from "./types"


export class BookDB extends Dexie {
  books!: Table<IBook>
  config!: Table<{ key: string, value: any }>
  blocks!: Table<IBlockSaved>

  constructor() {
    super('db')

    this.version(1).stores({
      books: 'id, name, createdAt',
      config: 'key',
      blocks: 'name'
    })

    this.on('populate', () => {
      return this.init()
    })

    this.books.hook('creating', function (id, obj) {
      obj.id = nanoid()
      obj.name = obj.name ? obj.name : `New Book - ${obj.id.slice(0, 5)}`
    })
  }

  async init() {
    const newBooks = defaultBooks.map((book, i) => ({
      ...book,
      id: nanoid(),
      createdAt: new Date(new Date().getTime() + i).toISOString(),
      updatedAt: new Date(new Date().getTime() + i).toISOString()
    }))
    await this.books.bulkAdd(newBooks)
    await this.blocks.bulkAdd(savedBlocks)
  }

}

export const db = new BookDB()
