import { Injectable } from '@nestjs/common'
import { Enterprise } from '../db/entities/Enterprise.entity'

@Injectable()
export class AppService {
  constructor() {}

  async getAllEnterprises(): Promise<Enterprise[]> {
    return await Enterprise.find()
  }

  async set(id: string): Promise<void> {
    await Enterprise.create({
      name: id,
    }).save()
  }
}
