import { db } from "@/lib/db"
import { EBlockType } from "@/lib/types"
import { useEffect, useRef, useState } from "react"

function BlockButton(props: {
  name: string
  onClick: () => void
  onMouseDown: () => void
  onMouseUp: () => void
}) {
  return (
    <div className="flex flex-row text-white/40 bg-white/5 hover:bg-white/10 p-2 px-3 rounded-lg text-sm" onClick={props.onClick} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp}>
      <div>{props.name}</div>
    </div>
  )
}

export function AddBlock(props: {
  add(name: string): void
}) {

  const [blocks, setBlocks] = useState<string[]>([])
  const [query, setQuery] = useState<string>('')


  useEffect(() => {
    async function getSavedBlocks() {
      const savedBlocks = await db.blocks.toArray()
      setBlocks([
        ...Object.values(EBlockType),
        ...savedBlocks.map(block => block.name)
      ])
    }
    getSavedBlocks()
  }, [blocks])

  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [isClickInside, setIsClickInside] = useState(false)


  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  function handleClick() {
    if (!isActive) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function handleBlur() {
    if (!isClickInside) {
      setIsActive(false)
    } else {
      inputRef.current?.focus()
    }
  }

  return (
    <div className={`opacity-0 group flex flex-col w-full rounded-2xl gap-4 p-4 relative cursor-pointer text-sm ${isActive
      ? 'bg-white/5 opacity-100'
      : 'bg-white/[3%] hover:bg-white/5 hover:opacity-100'
      }`} onClick={handleClick} onBlur={handleBlur}>
      {isActive
        ? <div className="flex flex-col gap-4">
          <input ref={inputRef} className="bg-black/20 w-full text-white/30 outline-none p-4 rounded-xl" onChange={(e) => setQuery(e.target.value)} />
          <div className="grid grid-cols-3 gap-2 capitalize max-h-36 overflow-scroll" autoFocus>
            {blocks.filter(block => block.includes(query)).map((block) => (
              <BlockButton
                key={block}
                name={block.replace(/_/g, ' ')}
                onMouseDown={() => setIsClickInside(true)}
                onMouseUp={() => setIsClickInside(false)}
                onClick={() => props.add(block)} />
            ))}
          </div>
        </div>
        : <div className="text-white/10 group-hover:text-white/50">+ Add a Component</div>
      }
    </div>
  )
}