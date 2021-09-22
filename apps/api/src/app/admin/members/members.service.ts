import { DeleteResult, InsertResult } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Member } from '@scop/entities'

@Injectable()
export class AdminMembersService {

  async getMembers() : Promise<Member[]>
  {
    return await Member.find({ where: { enterprise: { id: 1 } } })
  }

  async getMember(memberId: number) : Promise<Member>
  {
    return await Member.findOne({
      where: {
        id: memberId,
        enterprise: { id: 1 }
      }
    })
  }

  async newMember(member: Member) : Promise<InsertResult>
  {
    return await Member.insert(member)
  }

  async updateMember(member: Member) : Promise<Member>
  {
    return await Member.save(member)
  }

  async deleteMember(memberId: number) : Promise<DeleteResult>
  {
    return await Member.delete(memberId)
  }

}
