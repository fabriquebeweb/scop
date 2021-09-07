import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Meeting } from 'src/app/misc/entities/Meeting'
import { API } from 'src/app/app.common'

@Injectable()
export class AdminMeetingsService {

  constructor(
    private readonly http: HttpClient
  ) {}

  async getMeetingsSummary() : Promise<Meeting[]>
  {
    return await this.http.get<Meeting[]>(API.path(`/admin/meetings`), API.options()).toPromise()
  }

  async getMeetingDetails(id: string|number) : Promise<Meeting>
  {
    return await this.http.get<Meeting>(API.path(`/admin/meetings/${id}`), API.options()).toPromise()
  }

}
