import { DeleteResult, InsertResult } from 'typeorm'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NewMemberDTO, Member } from '@scop/interfaces'
import { API } from '@scop/globals'
import { lastValueFrom } from 'rxjs'


@Injectable()
export class AdminMembersService {

  members!: Member[]

  constructor(
    private readonly http: HttpClient
  ){}

  getMembers() : Promise<Member[]>
  {
    return lastValueFrom(this.http.get<Member[]>(`${API.PATH}/admin/members`, API.OPTIONS))
  }

  getMember(id: number) : Promise<Member>
  {
    return lastValueFrom(this.http.get<Member>(`${API.PATH}/admin/members/${id}`, API.OPTIONS))
  }

  setNewMember(member: NewMemberDTO) : Promise<InsertResult>
  {
    return lastValueFrom(this.http.post<InsertResult>(`${API.PATH}/admin/members`, member, API.OPTIONS))
  }

  resetMember(member: Member) : Promise<Member>
  {
    return lastValueFrom(this.http.put<Member>(`${API.PATH}/admin/members/${member.id}`, member, API.OPTIONS))
  }

  unsetMember(id: number) : Promise<DeleteResult>
  {
    return lastValueFrom(this.http.delete<DeleteResult>(`${API.PATH}/admin/members/${id}`, API.OPTIONS))
  }

}
