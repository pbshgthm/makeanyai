import { EBlockState, EBlockType, IBlock, IBook } from "@/lib/types"

export const emptyBlock: IBlock = {
  name: '',
  savedName: null,
  type: EBlockType.FormatText,
  config: {
    inputs: [],
    vars: {}
  },
  cache: {
    output: '',
    state: EBlockState.NewInput
  }
}


export const emptyBook: IBook = {
  id: '',
  description: '',
  createdAt: '',
  updatedAt: '',
  name: '',
  blocks: [
    emptyBlock
  ]
}

export const defaultBooks: IBook[] = [
  {
    id: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    name: 'New Almost Empty Book',
    blocks: [
      {
        name: 'something',
        type: EBlockType.FormatText,
        savedName: null,
        config: {
          inputs: [
            'hello'
          ],
          vars: {}
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      }
    ]
  },
  {
    id: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    name: 'Github handle to Custom Decription',
    blocks: [
      {
        name: 'username',
        type: EBlockType.FormatText,
        savedName: null,
        config: {
          inputs: [
            'pbshgthm'
          ],
          vars: {}
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      },
      {
        name: 'github_profile',
        type: EBlockType.CallAPI,
        savedName: null,
        config: {
          inputs: [
            'https://api.github.com/users/{username}'
          ],
          vars: {}
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      },
      {
        name: 'description',
        type: EBlockType.AskAI,
        savedName: null,
        config: {
          inputs: [
            'use the following github profile to give a summary of their projects in 50 words {github_profile}'
          ],
          vars: {}
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      },
      {
        name: 'send_email',
        type: EBlockType.CallAPI,
        savedName: null,
        config: {
          inputs: [
            'https://api.github.com/users/{username}/repos'
          ],
          vars: {}
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      }
    ]
  }, {
    id: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    name: 'Saved Blocks',
    blocks: [
      {
        name: 'explain_hello',
        type: EBlockType.AskAI,
        savedName: 'summarise',
        config: {
          inputs: [
            'Summarise the following text [[long_text]] and return a [[count]] word summary'
          ],
          vars: {
            long_text: 'hello world',
            count: '50'
          }
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      },
      {
        name: 'new_language_greet',
        type: EBlockType.AskAI,
        savedName: 'translate',
        config: {
          inputs: [
            'Translate the the following text to [[to_language]] [[original_text]]'
          ],
          vars: {
            to_language: 'french',
            original_text: 'Hello Everyone! {explain_hello}. Goodbye'
          }
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      }
    ]
  },
  {
    id: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    name: 'Saved Blocks 2',
    blocks: [
      {
        name: 'first_line',
        savedName: 'pickup_line',
        type: EBlockType.FormatText,
        config: {
          inputs: [
            'hello'
          ],
          vars: {}
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      },
      {
        name: 'second_line',
        savedName: 'var_line',
        type: EBlockType.FormatText,
        config: {
          inputs: [
            'What are the benifits of [[food]] and [[drink]]'
          ],
          vars: {
            food: 'pizza',
            drink: 'coke'
          }
        },
        cache: {
          output: '',
          state: EBlockState.NewInput
        }
      }
    ]
  }
]