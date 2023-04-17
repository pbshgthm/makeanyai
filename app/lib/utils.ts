import { IBlock, IBook } from "@/lib/types"

export function deepCopy(book: IBook | IBlock | IBlock[]) {
  return JSON.parse(JSON.stringify(book))
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function openAICall(prompt: string, apiKey: string) {
  return await fetch("https://api.openai.com/v1/chat/completions", {
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": prompt }]
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (!res.ok) {
      throw new Error("Error fetching data from AI")
    }
    return res.json()
  }).then(res => res.choices[0].message.content)
}
export function getVars(text: string) {
  return text.match(/(?<={)[^{}]+(?=})/g) || []
}

export function getInputVars(text: string) {
  return text.match(/(?<=\[)\[.*?\](?=\])/g) || []
}

function checkVars(vars: any[], varStore: any) {
  vars.forEach((v) => {
    if (!varStore[v]) {
      throw new Error(`Variable ${v} is not defined`)
    }
  })
}

export function replaceText(text: string, varStore: any) {
  try {
    const vars = getVars(text)
    checkVars(vars, varStore)
    vars.forEach((v) => {
      text = text.replaceAll(`{${v}}`, varStore[v])
    })
  } catch (error) {
    throw error
  }
  return text
}

export function replaceVars(
  text: string,
  vars: { [key: string]: string }
) {
  let newText = text
  Object.entries(vars).forEach(([key, value]) => {
    newText = newText.replaceAll(`[[${key}]]`, value)
  })
  return newText
}

export function timeSince(past: Date): string {
  const now = new Date()
  const diffInSeconds = Math.abs(now.getTime() - past.getTime()) / 1000
  const units = [
    { name: 'year', seconds: 365 * 24 * 60 * 60 },
    { name: 'month', seconds: 30 * 24 * 60 * 60 },
    { name: 'day', seconds: 24 * 60 * 60 },
    { name: 'hour', seconds: 60 * 60 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ]

  for (const unit of units) {
    const diffInUnits = Math.floor(diffInSeconds / unit.seconds)
    if (diffInUnits >= 1) {
      return `${diffInUnits} ${unit.name}${diffInUnits > 1 ? 's' : ''} ago`
    }
  }

  return 'just now'
}

export function truncate(text: string, length: number) {
  return (text.length > length) ? text.slice(0, length - 1) + '…' : text
}