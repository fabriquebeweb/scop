import { Chapter, Choice, User } from '@scop/interfaces'

export interface Answer {

  question: number
  user: number
  choice: number | null

}
