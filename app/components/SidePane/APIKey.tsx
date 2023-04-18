import { db } from "@/lib/db"
import { useLiveQuery } from "dexie-react-hooks"


export function APIKey() {

  const apiKey = useLiveQuery(() => db.config.get('openai'))


  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const apiKeyValue = e.target.value
    if (apiKeyValue !== undefined)
      db.config.put({
        key: 'openai',
        value: apiKeyValue,
      })
  }

  return (
    <div className="p-6 flex flex-col gap-2">
      <div className="text-xs text-white/20">OpenAI API Key</div>
      <input
        type="password"
        placeholder="Paste OpenAI API Key here"
        className="bg-black/20 rounded-lg w-full text-sm font-light py-2 px-4 outline-none placeholder:text-white/20 text-white/40"
        onChange={onChange}
        value={apiKey?.value || ''}
      />
    </div>
  )
}
