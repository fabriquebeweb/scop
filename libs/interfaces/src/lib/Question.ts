import { Choice } from '@scop/interfaces'

export interface Question {

  id: number
  title: string
  state: boolean | null
  choices?: Choice[]
  result: Choice | null
  chapter: number

}
