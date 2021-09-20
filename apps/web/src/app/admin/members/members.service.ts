import { DeleteResult, InsertResult } from 'typeorm'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NewUserDTO, User } from '@scop/interfaces'
import { DeleteResult, InsertResult } from 'typeorm'
import { API } from '../../app.common'

@Injectable()
export class AdminMembersService {

  members!: User[]

  constructor(
    private readonly http: HttpClient
  ){}

  getMembers() : Promise<User[]>
  {
    return this.http.get<User[]>(`${API.PATH}/admin/members`, API.OPTIONS).toPromise()
  }

  getMember(id: number) : Promise<User>
  {
    return this.http.get<User>(`${API.PATH}/admin/members/${id}`, API.OPTIONS).toPromise()
  }

  setNewMember(member: NewUserDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(`${API.PATH}/admin/members`, member, API.OPTIONS).toPromise()
  }

  resetMember(member: User) : Promise<User>
  {
    return this.http.put<User>(`${API.PATH}/admin/members/${member.id}`, member, API.OPTIONS).toPromise()
  }

  unsetMember(id: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(`${API.PATH}/admin/members/${id}`, API.OPTIONS).toPromise()
  }

}
