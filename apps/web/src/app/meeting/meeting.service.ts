import { Chapter, Meeting, MeetingDialogDTO, Question, QuestionAnswerDTO, QuestionResultDTO } from '@scop/interfaces'
import { HttpClient } from '@angular/common/http'
import { API, EVENTS } from '@scop/globals'
import { Injectable } from '@angular/core'
import { InsertResult } from 'typeorm'
import { Socket } from 'ngx-socket-io'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class MeetingService
{

  meeting!: Meeting
  dialog$ = this.socket.fromEvent<MeetingDialogDTO>(EVENTS.MEETING.DIALOG)

  constructor(
    private readonly http: HttpClient,
    private readonly socket: Socket
  ){}

  emitDialog(payload: MeetingDialogDTO) : void
  {
    this.socket.emit(EVENTS.MEETING.DIALOG, payload)
  }

  getMeeting(id: number) : Promise<Meeting>
  {
    return lastValueFrom(this.http.get<Meeting>(`${API.PATH}/meeting/${id}`, API.OPTIONS))
  }

  getMeetingChapters() : Promise<Chapter[]>
  {
    return lastValueFrom(this.http.get<Chapter[]>(`${API.PATH}/meeting/${this.meeting.id}/chapters`, API.OPTIONS))
  }

  getMeetingChapter(id: number) : Promise<Chapter>
  {
    return lastValueFrom(this.http.get<Chapter>(`${API.PATH}/meeting/${this.meeting.id}/chapter/${id}`, API.OPTIONS))
  }

  getQuestion(id: number) : Promise<Question>
  {
    return lastValueFrom(this.http.get<Question>(`${API.PATH}/meeting/${this.meeting.id}/question/${id}`, API.OPTIONS))
  }

  postAnswer(answer: QuestionAnswerDTO) : Promise<InsertResult>
  {
    return lastValueFrom(
      this.http.post<InsertResult>(`${API.PATH}/meeting/${this.meeting.id}/question/${answer.question}`, answer, API.OPTIONS)
    )
  }

  getQuestionResult(id: number) : Promise<QuestionResultDTO>
  {
    return lastValueFrom(this.http.get<QuestionResultDTO>(`${API.PATH}/meeting/${this.meeting.id}/question/${id}/results`, API.OPTIONS))
  }

}
