import { Module } from '@nestjs/common'
import { RouterModule } from 'nest-router'
import { CONNECTION } from '@scop/database'
import { ROUTES } from '@scop/api/app.routes'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from '@scop/api/app.service'
import { AppController } from '@scop/api/app.controller'
import { AdminModule } from '@scop/api/admin/admin.module'
import { MeetingModule } from '@scop/api/meeting/meeting.module'

@Module({
  imports: [
    RouterModule.forRoutes(ROUTES),
    TypeOrmModule.forRoot(CONNECTION),
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
