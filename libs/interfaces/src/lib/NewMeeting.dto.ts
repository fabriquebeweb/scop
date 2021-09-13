import { Chapter, MeetingType } from '@scop/interfaces'

export interface NewMeetingDTO {

  date?: Date
  location?: string
  meetingType?: MeetingType
  chapters: Chapter[]

}
