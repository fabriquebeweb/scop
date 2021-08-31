import * as Faker from 'faker'
import { Injectable } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Enterprise } from '../entities/Enterprise.entity'

@Injectable()
export class SeedService {
  constructor(private connection: Connection) {}

  async loop(loops: number, callback: any) : Promise<void> {
    const loop = counter => callback => {
      if (counter > 0) {
        callback()
        loop (counter - 1) (callback)
      }
    }

    await this.connection.transaction(async db => {
      loop (loops) (callback)
    })
  }

  async seed(): Promise<void> {
    /**
     * SEED START
     */

    await this.loop(3, async () => {
      const mdr = await Enterprise.find()
      console.log(mdr)
      let enterprise = new Enterprise()
      enterprise.name = Faker.name.firstName()
      enterprise.logo = Faker.internet.url()
      enterprise.primary = Faker.commerce.color()
      enterprise.secondary = Faker.commerce.color()
      enterprise.ternary = Faker.commerce.color()
      enterprise.save()
    })

    // const lol = await Enterprise.find()

    // console.log(lol)

    /**
     * SEED END
     */
  }
}
