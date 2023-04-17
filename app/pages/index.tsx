import { SidePane } from "@/components/SidePane/SidePane"
import { db } from "@/lib/db"
import { useLiveQuery } from "dexie-react-hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {

  const router = useRouter()
  const books = useLiveQuery(
    () => db.books.orderBy("createdAt").reverse().toArray(),
  )

  useEffect(() => {
    async function reinit() {
      if (books?.length === 0) {
        await db.init()
      }
      const nextBook = books ? books[0] : null
      if (nextBook) {
        router.push(`/${nextBook.id}`)
      }
    }
    reinit()
  }, [books, router])

  return (
    <div className="flex flex-row bg-[#171717]">
      <SidePane />
    </div>
  )
}
