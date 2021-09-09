import { Chapter } from "./Chapter"
import { MeetingType } from "./MeetingType"

export interface Meeting {

  id: number
  date: Date
  location?: string
  meetingType: MeetingType
  chapters?: Chapter[]
  state?: boolean

}
