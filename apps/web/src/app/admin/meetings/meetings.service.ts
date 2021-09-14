import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Meeting, MeetingType, NewMeetingDTO } from '@scop/interfaces'
import { DeleteResult, InsertResult } from 'typeorm'
import { Router } from '@angular/router'
import { API } from '../../app.common'

@Injectable()
export class AdminMeetingsService {

  meetingTypes!: MeetingType[]

  constructor(
    private readonly http: HttpClient
  ){}

  getMeetingsSummary() : Promise<Meeting[]>
  {
    return this.http.get<Meeting[]>(API.path(`/admin/meetings`), API.options()).toPromise()
  }

  getMeetingDetails(id: number) : Promise<Meeting>
  {
    return this.http.get<Meeting>(API.path(`/admin/meetings/${id}`), API.options()).toPromise()
  }

  getMeetingTypes() : Promise<MeetingType[]>
  {
    return this.http.get<MeetingType[]>(API.path(`/admin/meetings/types`), API.options()).toPromise()
  }

  setNewMeeting(meeting: NewMeetingDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(API.path(`/admin/meetings`), meeting, API.options()).toPromise()
  }

  unsetMeeting(id: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(API.path(`/admin/meetings/${id}`), API.options()).toPromise()
  }

  checkMeeting(meeting: Meeting | NewMeetingDTO) : boolean
  {
    return (meeting.enterprise && meeting.date && meeting.meetingType && meeting.chapters) ? true : false
  }

}
