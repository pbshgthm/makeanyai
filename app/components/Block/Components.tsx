import { EBlockState, IBlock } from "@/lib/types"
import { useEffect, useRef, useState } from 'react'

export function Input(props: {
  label: string
  text: string | null
  update: ((text: string) => void)
  isSaved: boolean
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [cursorPosition, setCursorPosition] = useState<number>(0)

  function handleScroll(e: React.UIEvent<HTMLTextAreaElement>) {
    if (divRef.current) {
      divRef.current.scrollTop = e.currentTarget.scrollTop
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.update(e.target.value)
    if (e.target.selectionStart !== null) {
      setCursorPosition(e.target.selectionStart)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.selectionStart = cursorPosition
      textareaRef.current.selectionEnd = cursorPosition
    }
  }, [cursorPosition])

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="text-xs text-white/30 capitalize">
        {'→ '}
        {props.label.replace(/_/g, ' ')}
      </div>
      <textarea
        ref={textareaRef}
        defaultValue={(props.text === null) ? 'Running...' : props.text}
        onChange={handleChange}
        onScroll={handleScroll} // Add the scroll event listener
        className="mt-6 w-full absolute h-24 resize-none outline-none overflow-scroll text-sm font-light text-white/0 caret-white/50 p-4 bg-white/0" spellCheck={false} />
      <div
        ref={divRef}
        className="h-24 whitespace-pre-wrap resize-none outline-none overflow-scroll text-sm font-light bg-black/20 text-white/50 p-4 rounded-xl"
        dangerouslySetInnerHTML={{
          __html: props.text?.replace(/\{([^}]+)\}/g, '<span class="text-purple-400/60">{$1}</span>') || ''
        }} />
    </div >
  )
}


export function Vars(props: {
  label: string
  text: string | null
  update: ((text: string) => void)
  isSaved: boolean
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)


  function handleScroll(e: React.UIEvent<HTMLTextAreaElement>) {
    if (divRef.current) {
      divRef.current.scrollTop = e.currentTarget.scrollTop
    }
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="text-xs text-white/30">
        {'→ '}
        {props.label}
      </div>
      { }
      <textarea
        ref={textareaRef}
        value={(props.text === null) ? 'Running...' : props.text}
        onChange={(e) => { props.update(e.target.value) }}
        onScroll={handleScroll}
        className="mt-6 w-full absolute h-24 resize-none outline-none overflow-scroll text-sm font-light text-white/0 caret-white/50 p-4 bg-white/0" spellCheck={false} />
      <div
        ref={divRef}
        className="h-24 whitespace-pre-wrap resize-none outline-none overflow-scroll text-sm font-light bg-black/20 text-white/50 p-4 rounded-xl"
        dangerouslySetInnerHTML={{
          __html: props.text?.replace(/\{([^}]+)\}/g, '<span class="text-purple-400/60">{$1}</span>') || ''
        }} />
    </div >
  )
}

export function Output(props: {
  label: string
  text: string | null
  stale: boolean
}) {
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="text-xs text-white/30">
        {'← '}
        {props.label}
        <span className="text-white/20">{props.stale ? ' (not updated)' : ''}</span>
      </div>
      <div
        className={`h-24 whitespace-pre-wrap resize-none outline-none overflow-scroll text-sm font-light p-4 rounded-xl bg-white bg-opacity-[3%] ${props.stale || (props.text === null)
          ? 'text-white/20'
          : 'text-white/50 '}`
        }>
        {props.text}
        <div />
      </div >
    </div >
  )
}

export function BlockState(props: { state: EBlockState }) {
  const stateColor: { [key in EBlockState]: string } = {
    [EBlockState.Empty]: 'bg-white/20',
    [EBlockState.Error]: 'bg-red-400',
    [EBlockState.NewInput]: 'bg-yellow-400/80',
    [EBlockState.Success]: 'bg-green-400/80',
    [EBlockState.Running]: 'bg-purple-400/80',
  }
  return (
    <div className={`text-[10px] ${props.state === EBlockState.Running ? 'bg-white/0 text-white/50' : 'bg-white/0 text-white/30'} flex flex-row gap-1 rounded-full items-center px-2.5 h-6`}>
      <div className={`${stateColor[props.state]} w-1.5 h-1.5 rounded-full`} />
      <div>{props.state}</div>
    </div>
  )
}

export function BlockRun(props: {
  runBlock: () => Promise<void>
}) {
  return (
    <div className={`text-[10px] bg-purple-400/10 text-white/40 hover:text-white/60 hover:bg-purple-400/30 cursor-pointer flex flex-row gap-1 rounded-full items-center px-2.5 h-6`} onClick={props.runBlock}>
      Run
    </div>
  )
}

export function TextInput(props: {
  value: string
  onChange: (text: string) => void
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.value)
  }

  return (
    <input
      className="min-w-24 text-sm py-1.5 px-4 bg-black/20 border-none rounded-lg text-white/60 outline-none h-full caret-white/50"
      value={props.value}
      onChange={handleChange}
      spellCheck={false}
      onFocus={(e) => e.target.select()}
    />
  )
}

export function BLockHeader(props: {
  block: IBlock
  pos: number
  isSaved: boolean
  handleRemove: () => void
  rename: (name: string) => void
  runBlock: () => Promise<void>
  saveBlock: () => void
}) {
  return (
    <div className="flex flex-row justify-between h-8 relative">
      <div className={`rounded-full flex items-center justify-center absolute top-0 left-[-4rem] h-8 w-8  ${props.block.cache.state === EBlockState.Running
        ? 'bg-purple-400/20 text-white/40'
        : 'bg-white bg-opacity-5 text-white/20'
        }`}
      >
        {props.pos + 1}
      </div>
      <div className="group bg-white bg-opacity-[3%] hover:bg-red-400 hover:bg-opacity-[10%] rounded-full flex items-center justify-center absolute top-0 -right-16 h-8 w-8 text-white/20 hover:text-red-400 text-sm cursor-pointer" onClick={props.handleRemove}>
        × <span className="absolute opacity-0 group-hover:opacity-50 left-12">delete</span>
      </div>
      <div className="group bg-white bg-opacity-[3%] hover:bg-purple-400 hover:bg-opacity-[10%] rounded-full flex items-center justify-center absolute top-12 -right-16 h-8 w-8 text-white/20 hover:text-purple-400 text-sm cursor-pointer" onClick={props.saveBlock}>
        {props.isSaved ? '-' : '+'}
        <span className="absolute opacity-0 group-hover:opacity-50 left-12">
          {props.isSaved ? 'unsave' : 'save'}
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="border-none text-sm rounded-md text-white/40 flex items-center justify-center h-8 capitalize">
          {props.block.savedName?.replace(/_/g, ' ') || props.block.type}
        </div>
        <TextInput onChange={props.rename} value={props.block.name} />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <BlockState state={props.block.cache.state} />
        <BlockRun runBlock={props.runBlock} />
      </div>
    </div>
  )
}