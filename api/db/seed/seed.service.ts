import * as Faker from 'faker'
import { Injectable } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Enterprise } from '../entities/Enterprise.entity'
import { Provider } from '../entities/Provider.entity'

@Injectable()
export class SeedService {
  constructor(private connection: Connection) {}

  async loop(loops: number, callback: any) : Promise<void> {
    const loop = (counter: number) => (func: any) => {
      if (counter > 0) {
        callback()
        loop (counter - 1) (func)
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
      Provider.create({
        name: Faker.company.companyName()
      }).save()
    })

    await this.loop(3, async () => {
      Enterprise.create({
        name: Faker.company.companyName(),
        logo: Faker.internet.url(),
        primary: Faker.commerce.color(),
        secondary: Faker.commerce.color(),
        ternary: Faker.commerce.color(),
        provider: await Provider.findOne()
      }).save()
    })

    /**
     * SEED END
     */
  }
}
