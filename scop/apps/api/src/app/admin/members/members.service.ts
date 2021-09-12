import { Injectable } from '@nestjs/common'
import { DeleteResult, InsertResult } from 'typeorm'
import { UserEntity } from '@scop/entities'

@Injectable()
export class AdminMembersService {

  async getMembers() : Promise<UserEntity[]>
  {
    return await UserEntity.find({ where: { enterprise: { id: 1 } } })
  }

  async newMember(member: UserEntity) : Promise<InsertResult>
  {
    return await UserEntity.insert(member)
  }

  async updateMember(member: UserEntity) : Promise<UserEntity>
  {
    return await UserEntity.save(member)
  }

  async deleteMember(memberId: number) : Promise<DeleteResult>
  {
    return await UserEntity.delete(memberId)
  }

}
