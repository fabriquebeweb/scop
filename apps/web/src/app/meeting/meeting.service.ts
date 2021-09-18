import { Chapter, ChapterAnswerDTO, ChapterResultDTO, Meeting, MeetingDialogDTO } from '@scop/interfaces'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { Socket } from 'ngx-socket-io'
import { InsertResult } from 'typeorm'
import { API, EVENTS } from '@scop/globals'

@Injectable()
export class MeetingService
{

  meeting!: Meeting
  dialog = this.socket.fromEvent<MeetingDialogDTO>(EVENTS.MEETING.DIALOG)

  constructor(
    private readonly http: HttpClient,
    private socket: Socket
  ){}

  emitDialog(payload: MeetingDialogDTO) : void
  {
    this.socket.emit(EVENTS.MEETING.DIALOG, payload)
  }

  getMeeting(id: number) : Promise<Meeting>
  {
    return this.http.get<Meeting>(`${API.PATH}/meeting/${id}`, API.OPTIONS).toPromise()
  }

  getMeetingChapters() : Promise<Chapter[]>
  {
    return this.http.get<Chapter[]>(`${API.PATH}/meeting/${this.meeting.id}/chapters`, API.OPTIONS).toPromise()
  }

  getMeetingChapter(id: number) : Promise<Chapter>
  {
    return this.http.get<Chapter>(`${API.PATH}/meeting/${this.meeting.id}/chapter/${id}`, API.OPTIONS).toPromise()
  }

  postAnswer(answer: ChapterAnswerDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(`${API.PATH}/meeting/${this.meeting.id}/chapter/${answer.chapter}`, answer, API.OPTIONS).toPromise()
  }

  getMeetingChapterResult(id: number) : Promise<ChapterResultDTO>
  {
    return this.http.get<ChapterResultDTO>(`${API.PATH}/meeting/${this.meeting.id}/chapter/${id}/results`, API.OPTIONS).toPromise()
  }

}
