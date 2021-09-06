import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { API } from 'src/app/app.common'
import { Meeting } from 'src/app/misc/entities/Meeting'

@Injectable()
export class AdminMeetingsService {

  constructor(
    private readonly http: HttpClient
  ) {}

  getMeeting(id: string|number): Promise<Meeting> {
    return this.http.get<Meeting>(API.path(`/admin/meetings/${id}`), API.options()).toPromise()
  }

}
