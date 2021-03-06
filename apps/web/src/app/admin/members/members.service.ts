import { DeleteResult, InsertResult } from 'typeorm'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NewMemberDTO, Member } from '@scop/interfaces'
import { API } from '@scop/globals'


@Injectable()
export class AdminMembersService {

  members!: Member[]

  constructor(
    private readonly http: HttpClient
  ){}

  getMembers() : Promise<Member[]>
  {
    return this.http.get<Member[]>(`${API.PATH}/admin/members`, API.OPTIONS).toPromise()
  }

  getMember(id: number) : Promise<Member>
  {
    return this.http.get<Member>(`${API.PATH}/admin/members/${id}`, API.OPTIONS).toPromise()
  }

  setNewMember(member: NewMemberDTO) : Promise<InsertResult>
  {
    return this.http.post<InsertResult>(`${API.PATH}/admin/members`, member, API.OPTIONS).toPromise()
  }

  resetMember(member: Member) : Promise<Member>
  {
    return this.http.put<Member>(`${API.PATH}/admin/members/${member.id}`, member, API.OPTIONS).toPromise()
  }

  unsetMember(id: number) : Promise<DeleteResult>
  {
    return this.http.delete<DeleteResult>(`${API.PATH}/admin/members/${id}`, API.OPTIONS).toPromise()
  }

}
