import { NewQuestionDTO, Question } from '@scop/interfaces'

export interface Chapter {

  id: number
  title: string
  description: string
  summary: string
  question: NewQuestionDTO | Question | null
  meeting: number

}
