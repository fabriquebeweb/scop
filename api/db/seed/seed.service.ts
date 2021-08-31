import * as Faker from 'faker';
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Enterprise } from '../entities/Enterprise.entity';
import { Status } from '../entities/Status.entity';
import { MeetingType } from '../entities/MeetingType.entity';
import { Meeting } from '../entities/Meeting.entity';
import { User } from '../entities/User.entity';
import { Provider } from '../entities/Provider.entity';

@Injectable()
export class SeedService {
  constructor(private connection: Connection) {}

  //Création d'une fonction qui obtient un élément aléatoire d'un tableau
  random(entities:any[]){
    return entities[Math.floor(Math.random() * entities.length)]
  };

  async loop(loops: number, callback: any) : Promise<void> {
    const loop = counter => callback => {
      if (counter > 0) {
        callback()
        loop (counter - 1) (callback)
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
    await this.loop(3, async () => {
      Provider.create({
        name: Faker.company.companyName()
      }).save();
    });

    await this.loop(3, async () => {
      Enterprise.create({
        name: Faker.company.companyName(),
        logo: Faker.internet.url(),
        primary: Faker.commerce.color(),
        secondary: Faker.commerce.color(),
        ternary: Faker.commerce.color(),
        provider: this.random(await Provider.find())
      }).save();
    });

    await this.loop(1, async()=>{
      MeetingType.create({
      name : Faker.lorem.word()
      }).save(); 
    });

    // await this.loop(3, async() => {
    //   Status.create({
    //   enterprise : await Enterprise.fin,
    //   meetingType : ,
    //   majorityMin : Faker.datatype.number(),
    //   majorityMax : Faker.datatype.number(),
    //   quorumMin : Faker.datatype.number(),
    //   quorumMax : Faker.datatype.number(),
    //   power : Faker.datatype.number()}).save();
    // });

    

    //await this.loop(1, async()=>{
    //   let meeting = new Meeting;
    //   meeting.date = Faker.datatype.datetime();
    //   meeting.location = Faker.address.streetAddress() + ' ' + Faker.address.city();
    //   meeting.enterprise = ;
    //   meeting.meetingType = ;
    //   meeting.state = Faker.datatype.boolean();
    //   meeting.save();
    // });

    //await this.loop(10, async()=>{
    //   let user = new User();
    //   user.firstName = Faker.name.firstName();
    //   user.lastName = Faker.name.lastName();
    //   user.email = Faker.internet.email();
    //   user.enterprise = ;
    //   user.save();
    // });

    /**
     * SEED END
     */
  };
  
  }
