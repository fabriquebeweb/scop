import * as Faker from 'faker';
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Enterprise } from '../entities/Enterprise.entity';

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

      /**
       * SEED END
       */
    });
  }
}
