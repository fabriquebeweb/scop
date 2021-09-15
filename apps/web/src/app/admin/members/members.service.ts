import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '@scop/interfaces'
import { API } from '../../app.common'

@Injectable()
export class AdminMembersService {

  constructor(
    private readonly http: HttpClient
  ){}

  getMembers() : Promise<User[]>
  {
    return this.http.get<User[]>(API.path('/admin/members'), API.options()).toPromise()
  }

}
