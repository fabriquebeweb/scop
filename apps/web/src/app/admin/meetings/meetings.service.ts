import { Chapter, Choice, Meeting, MeetingType, NewChapterDTO, NewChoiceDTO, NewMeetingDTO } from '@scop/interfaces'
import { DeleteResult, InsertResult } from 'typeorm'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API, EVENTS } from '@scop/globals'
import { Socket } from 'ngx-socket-io'
import { lastValueFrom } from 'rxjs'

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
    return lastValueFrom(this.http.get<Meeting[]>(`${API.PATH}/admin/meetings`, API.OPTIONS))
  }

  setNewMeeting(meeting: NewMeetingDTO) : Promise<InsertResult>
  {
    return lastValueFrom(this.http.post<InsertResult>(`${API.PATH}/admin/meetings`, meeting, API.OPTIONS))
  }

  getMeetingDetails(id: number) : Promise<Meeting>
  {
    return lastValueFrom(this.http.get<Meeting>(`${API.PATH}/admin/meetings/${id}`, API.OPTIONS))
  }

  resetMeeting(meeting: Meeting) : Promise<Meeting>
  {
    return lastValueFrom(this.http.put<Meeting>(`${API.PATH}/admin/meetings/${meeting.id}`, meeting, API.OPTIONS))
  }

  unsetMeeting(id: number) : Promise<DeleteResult>
  {
    return lastValueFrom(this.http.delete<DeleteResult>(`${API.PATH}/admin/meetings/${id}`, API.OPTIONS))
  }

  sendInvitations(meetingId: number) : Promise<any>
  {
    return lastValueFrom(this.http.post<any>(`${API.PATH}/admin/meetings/${meetingId}/invite`, null, API.OPTIONS))
  }

  getChapter(meetingId: number, chapterId: number) : Promise<Chapter>
  {
    return lastValueFrom(this.http.get<Chapter>(`${API.PATH}/admin/meetings/${meetingId}/chapters/${chapterId}`, API.OPTIONS))
  }

  setNewChapter(meetingId: number, chapter: NewChapterDTO) : Promise<Chapter>
  {
    return lastValueFrom(this.http.post<Chapter>(`${API.PATH}/admin/meetings/${meetingId}/chapters`, chapter, API.OPTIONS))
  }

  resetChapter(meetingId: number, chapter: Chapter) : Promise<Chapter>
  {
    return lastValueFrom(this.http.put<Chapter>(`${API.PATH}/admin/meetings/${meetingId}/chapters/${chapter.id}`, chapter, API.OPTIONS))
  }

  unsetChapter(meetingId: number, chapterId: number) : Promise<DeleteResult>
  {
    return lastValueFrom(this.http.delete<DeleteResult>(`${API.PATH}/admin/meetings/${meetingId}/chapters/${chapterId}`, API.OPTIONS))
  }

  setNewChoice(choice: NewChoiceDTO) : Promise<InsertResult>
  {
    return lastValueFrom(this.http.post<InsertResult>(`${API.PATH}/admin/choices`, choice, API.OPTIONS))
  }

  getChoice(choiceId: number) : Promise<Choice>
  {
    return lastValueFrom(this.http.get<Choice>(`${API.PATH}/admin/choices/${choiceId}`, API.OPTIONS))
  }

  getMeetingTypes() : Promise<MeetingType[]>
  {
    return lastValueFrom(this.http.get<MeetingType[]>(`${API.PATH}/admin/meetings/types`, API.OPTIONS))
  }

  checkMeeting(meeting: Meeting | NewMeetingDTO) : boolean
  {
    return (meeting.enterprise && meeting.date && meeting.meetingType && meeting.chapters) ? true : false
  }

}
