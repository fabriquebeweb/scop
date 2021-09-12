import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../app.common';
import { Chapter } from '../misc/entities/Chapter';
import { Meeting } from '../misc/entities/Meeting';

@Injectable()
export class MeetingService
{

  meeting?: Meeting

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

  async getMeeting(id: number) : Promise<Meeting>
  {
    return await this.http.get<Meeting>(API.path(`/meeting/${id}`), API.options()).toPromise()
  }

  async getMeetingChapters() : Promise<Chapter[]>
  {
    return await this.http.get<Chapter[]>(API.path(`/meeting/${this.meeting?.id}/chapters`), API.options()).toPromise()
  }

  async getMeetingChapter(id: number) : Promise<Chapter>
  {
    return await this.http.get<Chapter>(API.path(`/meeting/${this.meeting?.id}/chapter/${id}`), API.options()).toPromise()
  }

  async getMeetingChapterResult(id: number) : Promise<any>
  {
    return await this.http.get<any>(API.path(`/meeting/${this.meeting?.id}/chapter/${id}/result`), API.options()).toPromise()
  }

}
