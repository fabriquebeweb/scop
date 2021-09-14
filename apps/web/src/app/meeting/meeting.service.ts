import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Answer, Chapter, Choice, Meeting } from '@scop/interfaces'
import { API } from '../app.common'

@Injectable()
export class MeetingService
{

  meeting!: Meeting

  constructor(
    private readonly http: HttpClient
  ) {}

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
<<<<<<< HEAD
    return this.http.get<Chapter[]>(API.path(`/meeting/${this.meeting?.id}/chapters`), API.options()).toPromise()
=======
    return this.http.get<Chapter[]>(API.path(`/meeting/${this.meeting.id}/chapters`), API.options()).toPromise()
>>>>>>> 2fe1a66e751cb9db3f5cdb7c994e713025522eae
  }

  getMeetingChapter(id: number) : Promise<Chapter>
  {
<<<<<<< HEAD
    return this.http.get<Chapter>(API.path(`/meeting/${this.meeting?.id}/chapter/${id}`), API.options()).toPromise()
  }

  addChapterChoice(answer: Answer) : Promise<Answer>
  {
    return this.http.post<Answer>(API.path(`/meeting/${this.meeting?.id}/chapter/${answer.chapter}}`), answer, API.options()).toPromise()
=======
    return this.http.get<Chapter>(API.path(`/meeting/${this.meeting.id}/chapter/${id}`), API.options()).toPromise()
>>>>>>> 2fe1a66e751cb9db3f5cdb7c994e713025522eae
  }

}
