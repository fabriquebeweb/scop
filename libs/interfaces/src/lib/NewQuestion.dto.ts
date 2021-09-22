import { Choice } from '@scop/interfaces'

export interface NewQuestionDTO {

  id?: number
  title?: string
  choices: Choice[]
  state: boolean | null
  // chapter: number

}
