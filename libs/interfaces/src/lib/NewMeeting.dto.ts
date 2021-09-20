import { Chapter, Enterprise, MeetingType, NewChapterDTO } from '@scop/interfaces'

export interface NewMeetingDTO {

  date?: Date
  location?: string
  meetingType?: MeetingType
  enterprise: number
  chapters: Chapter[]

}
