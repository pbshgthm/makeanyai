import { db } from "@/lib/db"
import Link from "next/link"
import { useRouter } from "next/router"
import { APIKey } from "./APIKey"
import { BookList } from "./BookList"

export function SidePane() {

  const router = useRouter()

  async function reset() {
    await db.books.clear()
    await db.blocks.clear()
    await db.init()
    router.push('/')
  }

  return (
    <div className="w-[360px] h-screen p-12 pr-0 flex-none">
      <div className="bg-white/[3%] w-full h-full rounded-2xl flex flex-col gap-4">
        <div className="p-8 pb-4 flex flex-row justify-between align-center">
          <Link href="/">
            <div className="text-white/50 text-2xl font-thin">
              make<span className="text-purple-400/60">any</span>.ai
            </div>
          </Link>
          <div className="text-2xl text-white/20 items-center hover:text-white/60 cursor-pointer" onClick={reset}>⟳</div>
        </div>
        <div className="flex flex-grow overflow-hidden">
          <BookList />
        </div>
        <APIKey />
      </div>
    </div>
  )
}
