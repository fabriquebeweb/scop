import { Chapter, MeetingType, Enterprise } from '@scop/interfaces'

export interface Meeting {

  id: number
  date: string
  location: string
  enterprise: number | Enterprise
  meetingType: MeetingType
  chapters: Chapter[]
  state: boolean

}
