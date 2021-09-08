import * as Faker from 'faker/locale/fr'
import { Injectable } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Enterprise } from '../entities/Enterprise.entity'
import { Status } from '../entities/Status.entity'
import { MeetingType } from '../entities/MeetingType.entity'
import { Meeting } from '../entities/Meeting.entity'
import { User } from '../entities/User.entity'
import { Provider } from '../entities/Provider.entity'
import { Choice } from '../entities/Choice.entity'
import { Participation } from '../entities/Participation.entity'
import { Document } from '../entities/Document.entity'
import { Chapter } from '../entities/Chapter.entity'
import { Answer } from '../entities/Answer.entity'

@Injectable()
export class SeedService {
  constructor(
    private connection: Connection
  ) {}

  random(entities: any[]) : any {
    return entities[Math.floor(Math.random() * entities.length)]
  }

  async loop(loops: number, callback: any) : Promise<void> {
    for(let i = 0; i < loops; i++) {
      await this.connection.transaction(async db => {
        await callback(db)
      })
    }
  }

  async seed() : Promise<void> {
    /**
     * SEED START
     */

    // Provider
    await this.loop(3, async () => {
      Provider.insert(
        Provider.create({
          name: Faker.company.companyName(),
        })
      )
    })

    // Enterprise
    await this.loop(3, async () => {
      Enterprise.insert(
        Enterprise.create({
          name: Faker.company.companyName(),
          logo: Faker.internet.url(),
          primary: Faker.commerce.color(),
          secondary: Faker.commerce.color(),
          ternary: Faker.commerce.color(),
          provider: this.random(await Provider.find()),
        })
      )
    })

    // User
    await this.loop(200, async () => {
      User.insert(
        User.create({
          firstName: Faker.name.firstName(),
          lastName: Faker.name.lastName(),
          email: Faker.internet.email(),
          enterprise: this.random(await Enterprise.find()),
        })
      )
    })

    // Choice
    await this.loop(200, async () => {
      Choice.insert(
        Choice.create({
          title: Faker.lorem.sentence(),
          enterprise: this.random(await Enterprise.find()),
        })
      )
    })

    // Meeting Type
    await this.loop(4, async () => {
      MeetingType.insert(
        MeetingType.create({
          title: Faker.lorem.word()
        })
      )
    })

    // Status
    await this.loop(1, async () => {
      Status.insert(
        Status.create({
          enterprise: this.random(await Enterprise.find()),
          meetingType: this.random(await MeetingType.find()),
          majorityMin: Faker.datatype.number(),
          majorityMax: Faker.datatype.number(),
          quorumMin: Faker.datatype.number(),
          quorumMax: Faker.datatype.number(),
          power: Faker.datatype.number(),
        })
      )
    })

    // Meeting
    await this.loop(200, async () => {
      Meeting.insert(
        Meeting.create({
          date: Faker.datatype.datetime(),
          location: `${Faker.address.streetAddress()} ${Faker.address.city()}`,
          enterprise: this.random(await Enterprise.find()),
          meetingType: this.random(await MeetingType.find()),
          state: Faker.datatype.boolean(),
        })
      )
    })

    // Participation
    await this.loop(200, async () => {
      Participation.insert(
        Participation.create({
          code: Faker.internet.password(),
          isPresent: Faker.datatype.boolean(),
          procuration: this.random(await User.find()),
          user: this.random(await User.find()),
          meeting: this.random(await Meeting.find()),
        })
      )
    })

    // Document
    await this.loop(200, async () => {
      Document.insert(
        Document.create({
          path: Faker.internet.url(),
          name: Faker.lorem.words(),
          meeting: this.random(await Meeting.find()),
        })
      )
    })

    // Chapter
    await this.loop(200, async () => {
      Chapter.save(
        Chapter.create({
          title: Faker.lorem.sentence(),
          description: Faker.lorem.paragraph(),
          summary: Faker.lorem.words(),
          question: `${Faker.lorem.sentence()} ?`,
          choices: [
            this.random(await Choice.find()),
            this.random(await Choice.find())
          ],
          result: this.random(await Choice.find()),
          meeting: this.random(await Meeting.find())
        })
      )
    })

    // Answer
    await this.loop(200, async () => {
      Answer.save(
        Answer.create({
          chapter: this.random(await Chapter.find()),
          user: this.random(await User.find()),
          choice: this.random(await Choice.find())
        })
      )
    })

    /**
     * SEED END
     */
  }

}
