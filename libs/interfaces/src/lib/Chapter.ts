import { Choice } from '@scop/interfaces'

export interface Chapter {

  id: number
  title: string
  description: string
  summary: string
  question: string | null
  state: boolean | null
  choices?: Choice[]
  result?: Choice

}
