import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { API } from '../../app.common'
import { Meeting } from '../../misc/entities/Meeting'

@Injectable()
export class AdminMeetingsService {

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

}
