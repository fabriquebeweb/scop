import { Choice, Meeting, Provider, Status, User } from '@scop/interfaces'

export interface Enterprise {

  id: number
  name: string
  logo: string | null
  primary: string | null
  secondary: string | null
  ternary: string | null
  provider?: Provider
  status?: Status[]
  users?: User[]
  meetings?: Meeting[]
  choices?: Choice[]

}
