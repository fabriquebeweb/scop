import { Chapter, Choice, User } from '@scop/interfaces'

export interface Answer {

  chapter: number
  user: number
  choice: number | null

}
