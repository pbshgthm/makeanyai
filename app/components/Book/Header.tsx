import { IBook } from "@/lib/types"

export function Header(props: {
  book: IBook
  runBook: () => Promise<void>
  renameBook: (text: string) => void
  describeBook: (text: string) => void
  clearBook: () => void
}) {

  function rename(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value.replace(/[^a-zA-Z0-9-_ ]/g, '')
    props.renameBook(name)
  }

  return (
    <div className="text-white/50 bg-purple-200 bg-opacity-[6%] flex flex-col gap-4 p-4 rounded-2xl w-full" >
      <input className="outline-none text-white/40 text-lg w-full bg-black/20 bg-opacity-[2%] rounded-xl h-12 px-4" value={props.book.name} type="text" onChange={rename} />
      <div className="flex flex-col gap-2">
        <div className="text-xs text-white/30 capitalize">
          Description
        </div>
        <textarea
          className="w-full h-24 resize-none outline-none overflow-scroll text-sm font-light text-white/50 caret-white/50 p-4 bg-black/20 rounded-xl" spellCheck={false} value={props.book.description} onChange={(e) => {
            props.describeBook(e.target.value)
          }} />
      </div>
      <div className="mt-5 flex flex-row justify-between">
        <div className="flex flex-row gap-4 items-center">
          <button className="bg-purple-400/10 hover:bg-purple-400/30 text-white/40 hover:text-white/60 rounded-full px-4 py-2 text-sm" onClick={props.runBook}>
            Run Book
          </button>
          {/* <button className="bg-white/5 hover:bg-white/20 text-white/40 hover:text-white/50 rounded-full px-4 py-2 text-sm" onClick={props.clearBook}>
            Generate
          </button> */}
          <button className="text-white/20 hover:text-white/50 rounded-full px-4 py-2 text-sm" onClick={props.clearBook}>
            Clear
          </button>
        </div>
        <div className="text-white/20 text-xs text-right">
          Last Edited
          <br />
          {new Date(props.book.updatedAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
      </div>
    </div>
  )
}
