import { Book } from '@/components/Book/Book'
import { SidePane } from "@/components/SidePane/SidePane"
import { useRouter } from "next/router"

export default function RenderBook() {
  const router = useRouter()
  const { bookId } = router.query as { bookId: string }

  return (
    <div className="flex flex-row bg-[#171717]">
      <SidePane />
      {bookId && <Book bookId={bookId} />}
    </div>
  )
}
