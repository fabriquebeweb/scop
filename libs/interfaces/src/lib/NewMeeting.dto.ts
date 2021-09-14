import { Chapter, Enterprise, MeetingType } from '@scop/interfaces'

export interface NewMeetingDTO {

  date?: Date
  location?: string
  meetingType?: MeetingType
  enterprise: number | Enterprise
  chapters: Chapter[]

}
