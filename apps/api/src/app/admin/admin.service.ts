import { Injectable } from '@nestjs/common'
import { Choice } from '@scop/entities';
import { InsertResult } from 'typeorm';

@Injectable()
export class AdminService {

  async getChoice(id: number) : Promise<Choice>
  {
    return await Choice.findOne(id)
  }

  async setChoice(choice: Choice) : Promise<InsertResult>
  {
    return await Choice.insert(choice)
  }

}
