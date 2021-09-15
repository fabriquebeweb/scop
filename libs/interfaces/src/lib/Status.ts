import { Enterprise, MeetingType } from '@scop/interfaces'

export interface Status {

  majorityMin: number
  majorityMax: number | null
  quorumMin: number
  quorumMax: number | null
  power: number | null
  enterprise?: number
  meetingType?: number

}
