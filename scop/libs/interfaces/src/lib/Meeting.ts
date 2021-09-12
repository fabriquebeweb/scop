import { Chapter, MeetingType } from '@scop/interfaces'

export interface Meeting {

  id: number
  date: Date
  location?: string
  meetingType: MeetingType
  chapters?: Chapter[]
  state?: boolean

}
