import * as Faker from 'faker';
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Enterprise } from '../entities/Enterprise.entity';
import { Status } from 'db/entities/Status.entity';
import { MeetingType } from 'db/entities/MeetingType.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Admin } from 'db/entities/Admin.entity';
import { User } from 'db/entities/User.entity';
import { Provider } from 'db/entities/Provider.entity';

@Injectable()
export class SeedService {
  constructor(private connection: Connection) {}

  async seed(): Promise<void> {
    const loop = (counter) => (callback) => {
      if (counter > 0) {
        callback();
        loop(counter - 1)(callback);
      }
    };

    await this.connection.transaction(async (db) => {
      /**
       * SEED START
       */

      loop(1)(() => {
        let enterprise = new Enterprise();
        enterprise.name = Faker.name.firstName();
        enterprise.logo = Faker.internet.url();
        enterprise.primary = Faker.commerce.color();
        enterprise.secondary = Faker.commerce.color();
        enterprise.ternary = Faker.commerce.color();
        enterprise.save();
      });

      Enterprise.find().then((e) => console.log(e));

      loop(3)(() => {
        let status = new Status();
        status.enterprise = Enterprise.id();
        status.meetingType = ;
        status.majorityMin = Faker.datatype.number();
        status.majorityMax = Faker.datatype.number();
        status.quorumMin = Faker.datatype.number();
        status.quorumMax = Faker.datatype.number();
        status.power = Faker.datatype.number();
        status.save();
      });

      loop(1)(()=>{
        let meetingType = new MeetingType();
        meetingType.name = ;
        meetingType.save();
      });

      loop(1)(()=>{
        let meeting = new Meeting;
        meeting.date = Faker.datatype.datetime();
        meeting.location = Faker.address.streetAddress() + ' ' + Faker.address.city();
        meeting.enterprise = ;
        meeting.meetingType = ;
        meeting.state = Faker.datatype.boolean();
        meeting.save();
      });

      loop(1)(()=>{
        let admin = new Admin();
        admin.user = ;
        admin.password = Faker.internet.password();
        admin.save();
      });

      loop(10)(()=>{
        let user = new User();
        user.firstName = Faker.name.firstName();
        user.lastName = Faker.name.lastName();
        user.email = Faker.internet.email();
        user.enterprise = ;
        user.save();
      });

      loop(1)(()=>{
        let provider = new Provider();
        provider.name = Faker.internet.;
        provider.save();
      });






      /**
       * SEED END
       */
    });
  }
}
