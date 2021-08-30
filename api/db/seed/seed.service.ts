import * as Faker from 'faker'
import { Injectable } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Enterprise } from '../entities/Enterprise.entity'

@Injectable()
export class SeedService {
  constructor(
    private connection: Connection
  ) {}

  async seed() : Promise<void> {
    const loop = counter => callback => {
      if (counter > 0) {
        callback()
        loop (counter - 1) (callback)
      }
    }

    await this.connection.transaction(async db => {
      /**
       * SEED START
       */

      loop (3) (() => {
        let enterprise = new Enterprise()
        enterprise.name = Faker.name.firstName()
        enterprise.save()
      })

      Enterprise.find().then(e => console.log(e))

      /**
       * SEED END
       */
    })
  }
}