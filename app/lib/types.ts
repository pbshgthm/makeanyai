import { ReactElement } from "react"

export enum EBlockType {
  FormatText = 'format_text',
  AskAI = 'ask_ai',
  CallAPI = 'call_api'
}

export enum EBlockState {
  Empty = 'Empty',
  NewInput = 'New Input',
  Running = 'Running',
  Success = 'Success',
  Error = 'Error'
}

export interface IBlock {
  type: EBlockType
  name: string
  savedName: string | null
  config: IBlockConfig
  cache: {
    state: EBlockState
    output: string | null
  }
}

export interface IBlockConfig {
  inputs: string[]
  vars: {
    [key: string]: string
  }
}

export type IBlockSaved = Omit<IBlock, 'cache' | 'savedName'>

export type IBlockIOFunc = (props: any) => ReactElement

export interface IBlockIO {
  inputs: IBlockIOFunc[]
  output: IBlockIOFunc
}

export interface IBook {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description: string
  blocks: IBlock[]
}