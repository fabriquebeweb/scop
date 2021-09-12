import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '@scop/entities'
import { API } from '../../app.common'

@Injectable()
export class AdminMembersService {

  constructor(
    private readonly http: HttpClient
  ){}

  async getMembers() : Promise<User[]>
  {
    return await this.http.get<User[]>(API.path('/admin/members'), API.options()).toPromise()
  }

}
