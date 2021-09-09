import * as Faker from 'faker'
import { Injectable, Logger } from '@nestjs/common'
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

  LOOPS = {
    PROVIDERS : 1,
    ENTERPRISES : 1,
    ENTERPRISE : {
      USERS: 10,
      MEETINGS: 5,
      CHOICES: 10
    },
    MEETING : {
      TYPES: 4,
      DOCUMENTS: 5,
      CHAPTERS: 20,
      CHAPTER: {
        CHOICES: 3
      }
    }
  }

  pick(entities: any[]) : any
  {
    return entities[Math.floor(Math.random() * entities.length)]
  }

  async random(entity: any) : Promise<any>
  {
    return this.pick(await entity.find())
  }

  async list(loops: number, entity: any, conditions?: any) : Promise<any[]>
  {
    const entities = await entity.find((conditions) ? conditions : {}); const result: any[] = []
    for(let i: number = 0; i < loops; i++)
    {
      let tmp: any
      do { tmp = this.pick(entities) } while (result.includes(tmp))
      result.push(tmp)
    }
    return result
  }

  async loop(loops: number, callback: any) : Promise<void>
  {
    for(let i: number = 1; i < (loops + 1); i++)
    {
      await callback(i)
    }
  }

  async save(content: object, entity: any) : Promise<any>
  {
    return await entity.create(content).save()
  }

  async seed() : Promise<void>
  {

    /**
     * SEED
     */

    // MEETING TYPE
    await this.loop(this.LOOPS.MEETING.TYPES, async meetingTypeID => {

      await this.save({

        id: meetingTypeID,
        title: Faker.commerce.productName()

      }, MeetingType)

    }) // MEETING TYPE

    // PROVIDER
    await this.loop(this.LOOPS.PROVIDERS, async providerID => {

      await this.save({

        id: providerID,
        name: Faker.company.companyName()

      }, Provider)

      // ENTERPRISE
      await this.loop(this.LOOPS.ENTERPRISES, async enterpriseID => {

        await this.save({

          id: enterpriseID,
          name: Faker.company.companyName(),
          logo: Faker.image.imageUrl(),
          primary: Faker.commerce.color(),
          secondary: Faker.commerce.color(),
          ternary: Faker.commerce.color(),
          provider: await Provider.findOne(providerID)

        }, Enterprise)

        // USER
        await this.loop(this.LOOPS.ENTERPRISE.USERS, async userID => {

          await this.save({

            id: userID,
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email(),
            enterprise: await Enterprise.findOne(enterpriseID)

          }, User)

        }) // USER

        // CHOICE
        await this.loop(this.LOOPS.ENTERPRISE.CHOICES, async choiceID => {

          await this.save({

            id: choiceID,
            title: Faker.commerce.productDescription(),
            enterprise: await Enterprise.findOne(enterpriseID)

          }, Choice)

        }) // CHOICE

        // STATUS
        await this.loop(this.LOOPS.MEETING.TYPES, async meetingTypeID => {

          await this.save({

            enterprise: await Enterprise.findOne(enterpriseID),
            meetingType: await MeetingType.findOne(meetingTypeID),
            majorityMin: Faker.datatype.number(),
            majorityMax: Faker.datatype.number(),
            quorumMin: Faker.datatype.number(),
            quorumMax: Faker.datatype.number(),
            power: Faker.datatype.number()

          }, Status)

          // MEETING
          await this.loop(this.LOOPS.ENTERPRISE.MEETINGS, async meetingID => {

            await this.save({

              id: meetingID,
              date: Faker.datatype.datetime(),
              location: Faker.address.streetAddress(),
              enterprise: await Enterprise.findOne(enterpriseID),
              meetingType: await MeetingType.findOne(meetingTypeID),
              state: Faker.datatype.boolean()

            }, Meeting)

            // PARTICIPATION
            await this.loop(this.LOOPS.ENTERPRISE.USERS, async userID => {

              await this.save({

                code: Faker.internet.password(),
                isPresent: Faker.datatype.boolean(),
                procuration: null,
                user: await User.findOne(userID),
                meeting: await Meeting.findOne(meetingID)

              }, Participation)

            }) // PARTICIPATION

            // DOCUMENT
            await this.loop(this.LOOPS.MEETING.DOCUMENTS, async documentID => {

              await this.save({

                id: documentID,
                path: Faker.internet.url(),
                name: Faker.lorem.words(),
                meeting: await Meeting.findOne(meetingID)

              }, Document)

            }) // DOCUMENT

            // CHAPTER
            await this.loop(this.LOOPS.MEETING.CHAPTERS, async chapterID => {

              const choices = await this.list(this.LOOPS.MEETING.CHAPTER.CHOICES, Choice, { where: { enterprise: { id: enterpriseID } }})

              await this.save({

                id: chapterID,
                title: Faker.lorem.sentence(),
                description: Faker.lorem.paragraph(),
                summary: Faker.lorem.words(),
                question: `${Faker.lorem.sentence()} ?`,
                choices: choices,
                result: this.pick([ null, ...choices ]),
                meeting: await Meeting.findOne(meetingID)

              }, Chapter)

              // ANSWER
              await this.loop(this.LOOPS.ENTERPRISE.USERS, async userID => {

                await this.save({

                  chapter: await Chapter.findOne(chapterID),
                  user: await User.findOne(userID),
                  choice: this.pick([ null, ...choices ])

                }, Answer)

              }) // ANSWER
            }) // CHAPTER
          }) // MEETING
        }) // STATUS
      }) // ENTERPRISE
    }) // PROVIDER

    /**
     * SEED
     */

  }

}
