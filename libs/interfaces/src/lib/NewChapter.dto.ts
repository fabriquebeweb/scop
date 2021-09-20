import { Choice, Question } from '@scop/interfaces'

export interface NewChapterDTO {

  title?: string
  description?: string
  question?: Question | null
  meeting: number

}
