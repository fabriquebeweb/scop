import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '@scop/interfaces'
import { DeleteResult, InsertResult } from 'typeorm'
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

  getMember(id: number) : Promise<User>
  {
    return this.http.get<User>(API.path(`/admin/members/${id}`), API.options()).toPromise()
  }

  setNewMember(member: User) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(API.path(`/admin/members`), member, API.options()).toPromise()
  }

  resetMember(member: User) : Promise<User>
  {
    return this.http.put<User>(API.path(`/admin/members/${member.id}`), member, API.options()).toPromise()
  }

  unsetMember(id: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(API.path(`/admin/members/${id}`), API.options()).toPromise()
  }

}
