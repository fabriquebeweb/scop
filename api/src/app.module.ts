import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { connection } from '../db/db.connection'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    TypeOrmModule.forRoot(connection)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
