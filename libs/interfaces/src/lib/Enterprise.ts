import { Choice, Meeting, Provider, Status, User } from '@scop/interfaces'

export interface Enterprise {

  id: number
  name: string
  logo?: string
  primary?: string
  secondary?: string
  ternary?: string
  provider?: Provider | number
  status?: Status[] | number[]
  users?: User[] | number[]
  meetings?: Meeting[] | number[]
  choices?: Choice[] | number[]

}
