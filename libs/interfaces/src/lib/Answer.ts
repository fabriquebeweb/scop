import { Chapter, Choice, Member } from '@scop/interfaces'

export interface Answer {

  question: number
  member: number
  choice: number | null

}
