import { Injectable } from '@nestjs/common';
import { User } from 'db/entities/User.entity';

@Injectable()
export class AdminMembersService {

  async getMembers() : Promise<User[]>
  {
    return await User.find({ where: { enterprise: { id: 1 } } })
  }

}
