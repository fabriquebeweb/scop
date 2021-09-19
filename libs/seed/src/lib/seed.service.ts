import { Answer, Chapter, Choice, Document, Enterprise, Meeting, MeetingType, Participation, Provider, Status, User } from '@scop/entities'
import { Injectable } from '@nestjs/common'
import { SeedLoops } from '@scop/seed'
import * as Faker from 'faker'

@Injectable()
export class SeedService {

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
    const result: any[] = []
    const entities = await entity.find((conditions) ? conditions : {})
    for(let i: number = 0; i < loops; i++)
    {
      let tmp: any
      do { tmp = this.pick(entities) } while (result.includes(tmp))
      result.push(tmp)
    }
    return result
  }

  async forEach(entity: any, conditions: any, callback: any) : Promise<any>
  {
    for (const element of await entity.find((conditions) ? conditions : {}))
    {
      await callback(element)
    }
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
    await this.loop(SeedLoops.MEETING.TYPES, async () => {

      await this.save({

        title: Faker.commerce.productName()

      }, MeetingType)

    }) // MEETING TYPE

    // PROVIDER
    await this.loop(SeedLoops.PROVIDERS, async () => {

      const PROVIDER: Provider = await this.save({

        name: Faker.company.companyName()

      }, Provider)

      // ENTERPRISE
      await this.loop(SeedLoops.ENTERPRISES, async () => {

        const ENTERPRISE: Enterprise = await this.save({

          name: Faker.company.companyName(),
          logo: Faker.image.imageUrl(),
          primary: Faker.commerce.color(),
          secondary: Faker.commerce.color(),
          ternary: Faker.commerce.color(),
          provider: PROVIDER

        }, Enterprise)

        // USER
        await this.loop(SeedLoops.ENTERPRISE.USERS, async () => {

          await this.save({

            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email(),
            enterprise: ENTERPRISE

          }, User)

        }) // USER

        // CHOICE
        await this.loop(SeedLoops.ENTERPRISE.CHOICES, async () => {

          await this.save({

            title: Faker.commerce.productDescription(),
            enterprise: ENTERPRISE

          }, Choice)

        }) // CHOICE

        // STATUS
        await this.forEach(MeetingType, {}, async MEETING_TYPE => {

          await this.save({

            enterprise: ENTERPRISE,
            meetingType: MEETING_TYPE,
            majorityMin: Faker.datatype.number(),
            majorityMax: Faker.datatype.number(),
            quorumMin: Faker.datatype.number(),
            quorumMax: Faker.datatype.number(),
            power: Faker.datatype.number()

          }, Status)

          // MEETING
          await this.loop(SeedLoops.ENTERPRISE.MEETINGS, async () => {

            const MEETING: Meeting = await this.save({

              date: Faker.datatype.datetime(),
              location: Faker.address.streetAddress(),
              enterprise: ENTERPRISE,
              meetingType: MEETING_TYPE,
              state: true

            }, Meeting)

            // PARTICIPATION
            await this.forEach(User, { where: { enterprise: { id: ENTERPRISE.id } } }, async USER => {

              await this.save({

                code: Faker.internet.password(),
                isPresent: Faker.datatype.boolean(),
                procuration: null,
                user: USER,
                meeting: MEETING

              }, Participation)

            }) // PARTICIPATION

            // DOCUMENT
            await this.loop(SeedLoops.MEETING.DOCUMENTS, async () => {

              await this.save({

                path: Faker.internet.url(),
                name: Faker.lorem.words(),
                meeting: MEETING

              }, Document)

            }) // DOCUMENT

            // CHAPTER
            await this.loop(SeedLoops.MEETING.CHAPTERS, async () => {

              const CHOICES: Choice[] = await this.list(SeedLoops.MEETING.CHAPTER.CHOICES, Choice,
                { where: { enterprise: { id: ENTERPRISE.id } }}
              )

              const CHAPTER: Chapter = await this.save({

                title: Faker.lorem.sentence(),
                description: Faker.lorem.paragraph(),
                summary: Faker.lorem.words(),
                question: `${Faker.lorem.sentence()} ?`,
                choices: CHOICES,
                result: this.pick(CHOICES),
                meeting: MEETING,
                state: true

              }, Chapter)

              if (CHAPTER.id == 1)
              {
                // ANSWER
                await this.forEach(User, { where: { enterprise: { id: ENTERPRISE.id } } }, async USER => {

                  await this.save({

                    user: USER,
                    chapter: CHAPTER,
                    choice: this.pick([ null, ...CHOICES ])

                  }, Answer)

                }) // ANSWER
              }

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
