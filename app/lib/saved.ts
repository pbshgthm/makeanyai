import { EBlockType, IBlockSaved } from "./types"

export const savedBlocks: IBlockSaved[] = [
  {
    name: 'pickup_line',
    type: EBlockType.FormatText,
    config: {
      inputs: [
        'Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.'
      ],
      vars: {}
    }
  },
  {
    name: 'var_line',
    type: EBlockType.FormatText,
    config: {
      inputs: [
        'What are the benifits of [[food]] and [[drink]]'
      ],
      vars: {
        food: '',
        drink: ''
      }
    }
  },
  {
    name: 'summarise',
    type: EBlockType.AskAI,
    config: {
      inputs: [
        'Summarise the following text [[long_text]] and return a [[count]] word summary'
      ],
      vars: {
        long_text: '',
        count: ''
      }
    }
  },
  {
    name: 'translate',
    type: EBlockType.AskAI,
    config: {
      inputs: [
        'Translate the the following text to [[to_language]] [[original_text]]'
      ],
      vars: {
        to_language: '',
        original_text: ''
      }
    }
  },
  {
    name: 'extract_points',
    type: EBlockType.AskAI,
    config: {
      inputs: [
        'Extract important points from the following text and return a bullet list [[content]]'
      ],
      vars: {
        content: ''
      }
    }
  },
]