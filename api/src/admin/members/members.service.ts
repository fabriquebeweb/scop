import { Injectable } from '@nestjs/common'
import { DeleteResult, InsertResult } from 'typeorm'
import { User } from 'db/entities/User.entity'

@Injectable()
export class AdminMembersService {

  async getMembers() : Promise<User[]>
  {
    return await User.find({ where: { enterprise: { id: 1 } } })
  }

  async newMember(member: User) : Promise<InsertResult>
  {
    return await User.insert(member)
  }

  async updateMember(member: User) : Promise<User>
  {
    return await User.save(member)
  }

  async deleteMember(memberId: number) : Promise<DeleteResult>
  {
    return await User.delete(memberId)
  }

}
