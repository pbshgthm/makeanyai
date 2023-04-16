import { db } from "@/lib/db"
import { IBlock } from "@/lib/types"
import { openAICall, replaceText, replaceVars } from "./utils"

export async function runFormatText(block: IBlock, varStore: any) {
  try {
    const _text = replaceVars(block.config.inputs[0], block.config.vars)
    const text = replaceText(_text, varStore)
    return text
  } catch (error) {
    throw error
  }
}

export async function runCallAPI(block: IBlock, varStore: any) {
  try {
    const _url = replaceVars(block.config.inputs[0], block.config.vars)
    const url = replaceText(_url, varStore)
    const response = await fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error("Error fetching data from API")
      }
      return res.text()
    })
    return response
  } catch (error) {
    throw error
  }
}

export async function runAskAI(block: IBlock, varStore: any) {

  const apiKey = await db.config.get('openai')

  const _prompt = replaceVars(block.config.inputs[0], block.config.vars)
  const prompt = replaceText(_prompt, varStore)

  try {
    const response = await openAICall(prompt, apiKey?.value || '')
    return response
  } catch (error) {
    throw error
  }
}