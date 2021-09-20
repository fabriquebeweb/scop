import { Choice } from '@scop/interfaces'

export interface NewChapterDTO {

  title?: string
  description?: string
  question?: string | null
  meeting: number
  choices: Choice[]

}
