import { db } from "@/lib/db"
import { emptyBook } from "@/lib/default"
import { IBook } from "@/lib/types"
import { truncate } from "@/lib/utils"
import { useLiveQuery } from "dexie-react-hooks"
import Link from "next/link"
import { useRouter } from 'next/router'

function BookItem(props: {
  book: IBook
  isSelected: boolean
  removeBook: () => void
}) {
  return (
    <Link href={props.book.id}>
      <div className={`flex flex-row gap-3 items-center p-2 px-4 rounded-xl cursor-pointer group ${props.isSelected ? 'bg-purple-400/10 text-white/60' : 'hover:bg-white/5'}`}>
        <div className="flex flex-col flex-grow gap-0.5">
          <div className="text-white/40 text-sm">
            {truncate(props.book.name, 24)}
          </div>
          <div className="text-white/30 text-[10px]">
            {props.book.createdAt}
          </div>
        </div>
        {
          props.isSelected &&
          <div className="bg-white/5 w-8 h-8 rounded-lg text-center text-white/30 opacity-0 justify-center items-center text-sm group-hover:flex hover:bg-red-400/10 hover:bg-red-400 group-hover:opacity-100" onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            props.removeBook()
          }}>
            x
          </div>
        }
      </div>
    </Link>
  )
}


export function BookList() {

  const router = useRouter()
  const { bookId } = router.query as { bookId: string }

  const books = useLiveQuery(
    () => db.books?.orderBy('createdAt').reverse().toArray()
  )

  async function addBook() {
    const newBook: IBook = {
      ...emptyBook,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    const id = await db.books.add(newBook)
    router.push(`/${id}`)
  }

  async function removeBook(bookId: string) {
    if (!books) return
    const currIndex = books.findIndex((book) => book.id === bookId)
    const nextBook = currIndex === (books.length - 1)
      ? books[(currIndex - 1)]
      : books[(currIndex + 1)]
    await db.books.delete(bookId)
    if (nextBook) {
      router.push(`/${nextBook.id}`)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="py-2 h-full flex flex-col gap-4 flex-grow overflow-hidden">
      <div className="px-8">
        <button className="w-full bg-white/5 text-white/40 hover:bg-purple-400/20 hover:text-white/60 p-2 rounded-lg" onClick={addBook}>New Book</button>
      </div>
      {
        books &&
        <div className="px-6 flex flex-col gap-2 overflow-scroll flex-grow min-h-0">
          {books.map((book) =>
            <BookItem key={book.id} book={book} isSelected={bookId === book.id} removeBook={
              () => { removeBook(book.id) }}
            />
          )}
        </div>
      }
    </div>
  )
}