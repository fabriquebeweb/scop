import { Choice, Meeting, Provider, Status, Member } from '@scop/interfaces'

export interface Enterprise {

  id: number
  name: string
  logo: string | null
  primary: string | null
  secondary: string | null
  ternary: string | null
  provider?: Provider
  status?: Status[]
  members?: Member[]
  meetings?: Meeting[]
  choices?: Choice[]

}
