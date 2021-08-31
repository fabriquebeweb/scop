import * as Faker from 'faker/locale/fr';
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Enterprise } from '../entities/Enterprise.entity';
import { Status } from '../entities/Status.entity';
import { MeetingType } from '../entities/MeetingType.entity';
import { Meeting } from '../entities/Meeting.entity';
import { User } from '../entities/User.entity';
import { Provider } from '../entities/Provider.entity';
import { Choice } from '../entities/Choice.entity';
import { Participation } from '../entities/Participation.entity';
import { Document } from '../entities/Document.entity';
import { Chapter } from '../entities/Chapter.entity';
import { Answer } from '../entities/Answer.entity';

@Injectable()
export class SeedService {
  constructor(private connection: Connection) {}

  //Création d'une fonction qui obtient un élément aléatoire d'un tableau
  random(entities:any[]){
    return entities[Math.floor(Math.random() * entities.length)]
  };

  async loop(loops: number, callback: any) : Promise<void> {
    const loop = (counter: number) => (func: any) => {
      if (counter > 0) {
        callback()
        loop (counter - 1) (func)
      }
    };

    await this.connection.transaction(async db => {
      loop (loops) (callback)
    })
  };

  async seed(): Promise<void> {
    /**
     * SEED START
     * Boucles qui génèrent de la fake data pour chaque entité
     */

    //Provider
    await this.loop(3, async () => {
      Provider.create({
        name: Faker.company.companyName(),
      }).save();
    });

    //Meeting Type
    await this.loop(1, async () => {
      MeetingType.create({
        name: Faker.lorem.word(),
      }).save();
    });

    //Enterprise
    await this.loop(3, async () => {
      Enterprise.create({
        name: Faker.company.companyName(),
        logo: Faker.internet.url(),
        primary: Faker.commerce.color(),
        secondary: Faker.commerce.color(),
        ternary: Faker.commerce.color(),
        provider: this.random(await Provider.find()),
      }).save();
    });

    //User
    await this.loop(20, async () => {
      User.create({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        email: Faker.internet.email(),
        enterprise: this.random(await Enterprise.find()),
      }).save();
    });

    //Choice
    await this.loop(3, async () => {
      Choice.create({
        title: Faker.lorem.sentence(),
        enterprise: this.random(await Enterprise.find()),
      }).save();
    });

    //Status
    await this.loop(3, async () => {
      Status.create({
        enterprise: this.random(await Enterprise.find()),
        meetingType: this.random(await MeetingType.find()),
        majorityMin: Faker.datatype.number(),
        majorityMax: Faker.datatype.number(),
        quorumMin: Faker.datatype.number(),
        quorumMax: Faker.datatype.number(),
        power: Faker.datatype.number(),
      }).save();
    });

    //Meeting
    await this.loop(1, async () => {
      Meeting.create({
        date: Faker.datatype.datetime(),
        location: Faker.address.streetAddress() + ' ' + Faker.address.city(),
        enterprise: this.random(await Enterprise.find()),
        meetingType: this.random(await MeetingType.find()),
        state: Faker.datatype.boolean(),
      }).save();
    });

    //Participation
    await this.loop(20, async () => {
      Participation.create({
        code: Faker.internet.password(),
        isPresent: Faker.datatype.boolean(),
        procuration: this.random(await User.find()),
        user: this.random(await User.find()),
        meeting: this.random(await Meeting.find()),
      });
    });

    //Document
    await this.loop(2, async () => {
      Document.create({
        path: Faker.internet.url(),
        name: Faker.lorem.words(),
        meeting: this.random(await Meeting.find()),
      });
    });

    //Chapter
    await this.loop(20, async () => {
      Chapter.create({
        title: Faker.lorem.sentence(),
        description: Faker.lorem.paragraph(),
        summary: Faker.lorem.words(),
        question: Faker.lorem.sentence() + '?',
        choices: [
          this.random(await Choice.find()),
          this.random(await Choice.find()),
        ],
        result: this.random(await Choice.find()),
        answers: this.random(await Answer.find()),
        meeting: this.random(await Meeting.find()),
      });
    });

    //Answer
    await this.loop(20, async () => {
      Answer.create({
        chapter: this.random(await Chapter.find()),
        user: this.random(await User.find()),
        choice: this.random(await Choice.find()),
      });
    });

    /**
     * SEED END
     */
  };
  
  }
