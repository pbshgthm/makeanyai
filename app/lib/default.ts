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

export const _defaultBooks: IBook[] = [
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

export const defaultBooks: IBook[] = [
  {
    "id": "",
    "description": "",
    "createdAt": "",
    "updatedAt": "",
    "name": "Recipe Generator for any weather",
    "blocks": [
      {
        "name": "get_weather",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Rainy"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_user_type",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Family"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_user_pref",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Veg Snacks"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": "Veg Snacks"
        }
      },
      {
        "name": "get_list",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Get list of recipes for {Get_weather} weather for {Get_user_type}. \nConsider {Get_user_pref}.\nDon't number the list."
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_recipe",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Select one recipe from {Get_list} for {Get_user_type} based on {Get_user_pref}.\nGive me a detailed step-by-step guide.\nInclude the ingredient list at the end."
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      }
    ]
  },
  {
    "id": "",
    "description": "",
    "createdAt": "",
    "updatedAt": "",
    "name": "Content generator for any topic and audience",
    "blocks": [
      {
        "name": "get_focus_area",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "animating on one's"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_trending_topics",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Give me a list of top trending topics in {Get_focus_area}"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_audience_type",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Film enthusiasts"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "filter_content",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Filter {Get_trending_topics} for {Get_audience_type}.\nGive me only the topics.\nDon't number the list of topics."
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_type",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "blog"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "generate_content",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "\nSelect the topic for {Get_audience_type} from {Filter_content}. Don't include it in the content.\nChoose the content length for {Get_audience_type} and {Get_type}. Don't include it in the content.\nGenerate content on any one of the topics from {Filter_content}.\nDon't include a subject or topic, or heading."
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_subject",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Create a catchy subject for {Generate_content}. It should be catchy to {Get_audience_type}."
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "generate_email",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Subject: {Get_subject}\nBody: {Generate_content}"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      }
    ]
  },
  {
    "id": "kYrDCZjsL2N-Yt1X40zJG",
    "description": "",
    "createdAt": "2023-04-17T04:21:11.278Z",
    "updatedAt": "2023-04-17T17:09:10.775Z",
    "name": "Travel itinerary generator for a destination",
    "blocks": [
      {
        "name": "get_destination",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Lower Parel, Mumbai"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": "Lower Parel, Mumbai"
        }
      },
      {
        "name": "get_user_pref",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "Relaxed trip - want to explore culture and history with friends"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_list",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Get a list of things to do in {Get_destination} based on {Get_user_pref}"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "create_itinerary",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Create an itinerary from {Get_list} based on {Get_user_pref}.\nInclude breaks based on {Get_user_pref}\nDecide the number of items in the itinerary based on {Get_user_pref}"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      }
    ]
  },
  {
    "id": "QIM3E0fS4gOj4lifliZWN",
    "description": "",
    "createdAt": "2023-04-16T23:48:57.469Z",
    "updatedAt": "2023-04-17T18:05:43.417Z",
    "name": "Github handle to Custom Decription to custom email",
    "blocks": [
      {
        "name": "username",
        "savedName": null,
        "type": EBlockType.FormatText,
        "config": {
          "inputs": [
            "pbshgthm"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "github_profile",
        "savedName": null,
        "type": EBlockType.CallAPI,
        "config": {
          "inputs": [
            "https://api.github.com/users/{username}"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "description",
        "type": EBlockType.AskAI,
        "savedName": null,
        "config": {
          "inputs": [
            "Describe the user and give a summary.\nGenerate a 15-20 word summary for each of their projects.\n{github_profile}"
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      },
      {
        "name": "get_email",
        "savedName": null,
        "type": EBlockType.AskAI,
        "config": {
          "inputs": [
            "Generate an email for {username}\nCompliment their work and add details of how it is interesting. Add details from {github_profile} and {description}.\nInvite the user for a call.\nAdd an interesting subject line."
          ],
          "vars": {}
        },
        "cache": {
          "state": EBlockState.NewInput,
          "output": ""
        }
      }
    ]
  }
]