import { Injectable } from '@nestjs/common'
import { Enterprise } from '../db/entities/enterprise.entity'

@Injectable()
export class AppService {
  constructor() {}

  async getAll(): Promise<Enterprise[]> {
    return await Enterprise.find()
  }

  async set(id: string) : Promise<void> {
    await Enterprise.save(
      Enterprise.create({
        name: id
      })
    )
  }
}
