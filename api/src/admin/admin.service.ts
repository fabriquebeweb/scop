import { Injectable } from '@nestjs/common'
import { User } from 'db/entities/User.entity'

@Injectable()
export class AdminService {

  async getEnterprise(id: number) {
    return await User.findOne(id, { relations: ["enterprise"] })
  }

}
