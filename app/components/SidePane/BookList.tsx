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
      <div className={`flex flex-row gap-3 justify-between items-center py-2 px-2 rounded-lg cursor-pointer ${props.isSelected ? 'bg-purple-400/10 text-white/60 group' : 'hover:bg-white/5'}`}>
        <div className="flex flex-col flex-shrink gap-1 truncate w-full h-9">
            <div className="text-white/40 text-xs flex flex-shrink w-full truncate">
             <div className="truncate"> {props.book.name}</div>
            </div>
            <div className="text-white/30 text-xs flex flex-shrink font-light truncate">
              {props.book.createdAt}
            </div>
        </div>
        {
          props.isSelected &&
          <div className=" bg-white/5 min-w-9 w-9 h-9 rounded-lg text-center text-white/30 opacity-0 justify-center items-center text-sm hidden group-hover:flex hover:bg-red-400/10 hover:bg-red-400 group-hover:opacity-100" onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            props.removeBook()
          }}>
            <div className="w-9"> x </div>
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
    <div className="h-full flex flex-col gap-2 flex-grow overflow-hidden">
      
      <div className="px-4 ">
        <div className="flex flex-row hover:bg-black/10 justify-start items-center px-2 py-2 rounded-lg gap-2 border border-white/5">
          <div className=" text-center text-white/30 flex text-xs">+
          </div>
          <button className=" text-white/40 text-left hover:text-white/60 text-xs rounded-lg" onClick={addBook}>Create a new Book</button>
        </div>
      </div>
      {
        books &&
        <div className="px-4 flex flex-col gap-2 overflow-scroll flex-grow min-h-0">
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