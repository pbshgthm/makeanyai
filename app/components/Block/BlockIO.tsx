import { EBlockType, IBlock, IBlockConfig, IBlockIO } from "@/lib/types"
import { Input, Output } from "./Components"

const FormatText: IBlockIO = {
  inputs: [
    (props: {
      text: string
      isSaved: boolean
      update: (text: string) => void
    }) => (<Input
      isSaved={props.isSaved}
      update={props.update}
      text={props.text}
      label="Raw Text"
    />)
  ],
  output: (props: {
    text: string
    stale: boolean
  }) => (<Output
    text={props.text}
    label="Formatted Text"
    stale={props.stale}
  />)
}

const AskAI = {
  inputs: [
    (props: {
      text: string
      isSaved: boolean
      update: (text: string) => void
    }) => (<Input
      isSaved={props.isSaved}
      update={props.update}
      text={props.text}
      label="Propmt"
    />)
  ],
  output: (props: {
    text: string
    stale: boolean
  }) => (<Output
    text={props.text}
    label="AI Response"
    stale={props.stale}
  />)
}


const CallAPI = {
  inputs: [
    (props: {
      text: string
      isSaved: boolean
      update: (text: string) => void
    }) => (<Input
      isSaved={props.isSaved}
      update={props.update}
      text={props.text}
      label="API URL"
    />)
  ],
  output: (props: {
    text: string
    stale: boolean
  }) => (<Output
    text={props.text}
    label="API Response"
    stale={props.stale}
  />)
}

const ioDict: { [key in EBlockType]: IBlockIO } = {
  [EBlockType.FormatText]: FormatText,
  [EBlockType.AskAI]: AskAI,
  [EBlockType.CallAPI]: CallAPI
}

export function BlockIO(props: {
  block: IBlock
  update: (config: IBlockConfig) => void
  stale: boolean
  isSaved: boolean
}) {
  const io = ioDict[props.block.type]

  function updateInput(newInput: string, index: number) {
    const inputs = props.block.config.inputs
    inputs[index] = newInput
    props.update({
      ...props.block.config,
      inputs
    })
  }

  function updateVars(key: string, value: string) {
    const vars = props.block.config.vars
    vars[key] = value
    props.update({
      inputs: props.block.config.inputs,
      vars: vars
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {
          props.isSaved
            ? Object.entries(props.block.config.vars).map(([key, value], i) => (
              <Input
                key={i}
                isSaved={props.isSaved}
                update={(text: string) => updateVars(key, text)}
                text={value}
                label={key}
              />
            ))
            : io.inputs.map((InputComponent, i) => <InputComponent
              key={i}
              text={props.block.config.inputs[i]}
              update={(text: string) => updateInput(text, i)}
            />)
        }
      </div>
      <div className="flex flex-col gap-4">
        {
          io.output({
            text: props.block.cache.output,
            stale: props.stale
          })
        }
      </div>
    </div>
  )
}
