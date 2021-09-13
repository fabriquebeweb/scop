import { routes } from './app.routes'
import { connection } from '@scop/database'
import { Module } from '@nestjs/common'
import { RouterModule } from 'nest-router'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AdminModule } from './admin/admin.module'
import { MeetingModule } from './meeting/meeting.module'

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TypeOrmModule.forRoot(connection),
    AdminModule,
    MeetingModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}
