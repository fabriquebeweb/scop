import { Question } from '@scop/interfaces'

export interface Chapter {

  id: number
  title: string
  description: string
  summary: string
  question: Question | null
  meeting: number

}
