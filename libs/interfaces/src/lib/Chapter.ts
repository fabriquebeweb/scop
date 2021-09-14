import { Choice } from '@scop/interfaces'

export interface Chapter {

  id: number
  title: string
  description: string
  summary: string
  question?: string
  state?: boolean
  choices?: Choice[]
  result?: Choice

}