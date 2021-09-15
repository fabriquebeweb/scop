import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Chapter, ChapterResultDTO, Meeting, MeetingDialogDTO } from '@scop/interfaces'
import { API } from '../app.common'
import { Subject } from 'rxjs'

@Injectable()
export class MeetingService
{

  meeting!: Meeting
  dialog = new Subject<MeetingDialogDTO>()

  constructor(
    private readonly http: HttpClient
  ){}

  notify(chapter: MeetingDialogDTO)
  {
    this.dialog.next(chapter)
  }

  // get(key: string) : any
  // {
  //   const value = sessionStorage.getItem(key)
  //   return (value) ? JSON.parse(value) : null
  // }

  // unset(key: string) : any
  // {
  //   sessionStorage.removeItem(key)
  // }

  // set(key: string, value: any) : void
  // {
  //   sessionStorage.setItem(key, JSON.stringify(value))
  // }

  getMeeting(id: number) : Promise<Meeting>
  {
    return this.http.get<Meeting>(API.path(`/meeting/${id}`), API.options()).toPromise()
  }

  getMeetingChapters() : Promise<Chapter[]>
  {
    return this.http.get<Chapter[]>(API.path(`/meeting/${this.meeting.id}/chapters`), API.options()).toPromise()
  }

  getMeetingChapter(id: number) : Promise<Chapter>
  {
    return this.http.get<Chapter>(API.path(`/meeting/${this.meeting.id}/chapter/${id}`), API.options()).toPromise()
  }

  getMeetingChapterResult(id: number) : Promise<ChapterResultDTO>
  {
    return this.http.get<ChapterResultDTO>(API.path(`/meeting/${this.meeting.id}/chapter/${id}/results`), API.options()).toPromise()
  }

}
