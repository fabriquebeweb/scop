import { Enterprise } from '@scop/interfaces'

export interface Provider {

  id: number
  name: string
  enterprises?: Enterprise[]

}
