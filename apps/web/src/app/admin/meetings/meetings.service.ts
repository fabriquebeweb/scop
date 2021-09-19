import { Meeting, MeetingType, NewMeetingDTO } from '@scop/interfaces'
import { DeleteResult, InsertResult } from 'typeorm'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from '@scop/globals'

@Injectable()
export class AdminMeetingsService {

  meetings!: Meeting[]
  meetingTypes!: MeetingType[]

  constructor(
    private readonly http: HttpClient
  ){}

  getMeetingsSummary() : Promise<Meeting[]>
  {
    return this.http.get<Meeting[]>(`${API.PATH}/admin/meetings`, API.OPTIONS).toPromise()
  }

  getMeetingDetails(id: number) : Promise<Meeting>
  {
    return this.http.get<Meeting>(`${API.PATH}/admin/meetings/${id}`, API.OPTIONS).toPromise()
  }

  setNewMeeting(meeting: NewMeetingDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(`${API.PATH}/admin/meetings`, meeting, API.OPTIONS).toPromise()
  }

  resetMeeting(meeting: Meeting) : Promise<Meeting>
  {
    return this.http.put<Meeting>(`${API.PATH}/admin/meetings/${meeting.id}`, meeting, API.OPTIONS).toPromise()
  }

  unsetMeeting(id: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(`${API.PATH}/admin/meetings/${id}`, API.OPTIONS).toPromise()
  }

  getMeetingTypes() : Promise<MeetingType[]>
  {
    return this.http.get<MeetingType[]>(`${API.PATH}/admin/meetings/types`, API.OPTIONS).toPromise()
  }

  checkMeeting(meeting: Meeting | NewMeetingDTO) : boolean
  {
    return (meeting.enterprise && meeting.date && meeting.meetingType && meeting.chapters) ? true : false
  }

}
