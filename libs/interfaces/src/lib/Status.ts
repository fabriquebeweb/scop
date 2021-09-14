import { Enterprise, MeetingType } from '@scop/interfaces'

export interface Status {

  majorityMin: number
  majorityMax?: number
  quorumMin: number
  quorumMax?: number
  power?: number
  enterprise?: Enterprise | number
  meetingType?: MeetingType | number

}
