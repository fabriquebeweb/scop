import { Chapter, Choice, User } from '@scop/interfaces'

export interface Answer {

  chapter: Chapter
  user: User
  choice?: Choice

}
