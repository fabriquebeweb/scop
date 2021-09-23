import { Chapter, Choice, Meeting, MeetingType, NewChapterDTO, NewChoiceDTO, NewMeetingDTO } from '@scop/interfaces'
import { DeleteResult, InsertResult } from 'typeorm'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API, EVENTS } from '@scop/globals'
import { Socket } from 'ngx-socket-io'

@Injectable()
export class AdminMeetingsService {

  meetings!: Meeting[]
  meetingTypes!: MeetingType[]
  choiceOptions$ = this.socket.fromEvent<Choice[]>(EVENTS.ADMIN.CHOICE.OPTIONS)

  constructor(
    private readonly http: HttpClient,
    public readonly socket: Socket
  ){}

  getMeetingsSummary() : Promise<Meeting[]>
  {
    return this.http.get<Meeting[]>(`${API.PATH}/admin/meetings`, API.OPTIONS).toPromise()
  }

  setNewMeeting(meeting: NewMeetingDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(`${API.PATH}/admin/meetings`, meeting, API.OPTIONS).toPromise()
  }

  getMeetingDetails(id: number) : Promise<Meeting>
  {
    return this.http.get<Meeting>(`${API.PATH}/admin/meetings/${id}`, API.OPTIONS).toPromise()
  }

  resetMeeting(meeting: Meeting) : Promise<Meeting>
  {
    return this.http.put<Meeting>(`${API.PATH}/admin/meetings/${meeting.id}`, meeting, API.OPTIONS).toPromise()
  }

  unsetMeeting(id: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(`${API.PATH}/admin/meetings/${id}`, API.OPTIONS).toPromise()
  }

  getChapter(meetingId: number, chapterId: number) : Promise<Chapter>
  {
    return this.http.get<Chapter>(`${API.PATH}/admin/meetings/${meetingId}/chapters/${chapterId}`, API.OPTIONS).toPromise()
  }

  setNewChapter(meetingId: number, chapter: NewChapterDTO) : Promise<Chapter>
  {
    return this.http.post<Chapter>(`${API.PATH}/admin/meetings/${meetingId}/chapters`, chapter, API.OPTIONS).toPromise()
  }

  resetChapter(meetingId: number, chapter: Chapter) : Promise<Chapter>
  {
    return this.http.put<Chapter>(`${API.PATH}/admin/meetings/${meetingId}/chapters/${chapter.id}`, chapter, API.OPTIONS).toPromise()
  }

  unsetChapter(meetingId: number, chapterId: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(`${API.PATH}/admin/meetings/${meetingId}/chapters/${chapterId}`, API.OPTIONS).toPromise()
  }

  setNewChoice(choice: NewChoiceDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(`${API.PATH}/admin/choices`, choice, API.OPTIONS).toPromise()
  }

  getChoice(choiceId: number) : Promise<Choice>
  {
    return this.http.get<Choice>(`${API.PATH}/admin/choices/${choiceId}`, API.OPTIONS).toPromise()
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
