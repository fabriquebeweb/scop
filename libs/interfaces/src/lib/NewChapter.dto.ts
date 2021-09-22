import { NewQuestionDTO } from '@scop/interfaces'

export interface NewChapterDTO {

  title?: string
  description?: string
  question: NewQuestionDTO | null
  meeting: number

}
