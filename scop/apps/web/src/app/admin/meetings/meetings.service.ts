import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Meeting, MeetingType } from '@scop/entities'
import { API } from '../../app.common'

@Injectable()
export class AdminMeetingsService {

  meetingTypes!: MeetingType[]

  constructor(
    private readonly http: HttpClient
  ) {}

  async getMeetingsSummary() : Promise<Meeting[]>
  {
    return await this.http.get<Meeting[]>(API.path(`/admin/meetings`), API.options()).toPromise()
  }

  async getMeetingDetails(id: number) : Promise<Meeting>
  {
    return await this.http.get<Meeting>(API.path(`/admin/meetings/${id}`), API.options()).toPromise()
  }

  async getMeetingTypes() : Promise<MeetingType[]>
  {
    return await this.http.get<MeetingType[]>(API.path(`/admin/meetings/types`), API.options()).toPromise()
  }

}
