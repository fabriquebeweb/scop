import { Chapter, Choice, User } from '@scop/interfaces'

export interface Answer {

  chapter: Chapter | number
  user: User | number
  choice?: Choice | number

}
