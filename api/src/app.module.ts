import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AdminModule } from './admin/admin.module';
import { MeetingModule } from './meeting/meeting.module';
import { connection } from '../db/db.connection'
import { routes } from './app.routes'

@Module({
  imports: [
    RouterModule.register(routes),
    TypeOrmModule.forRoot(connection),
    AdminModule,
    MeetingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
