import { Module } from '@nestjs/common'
import { MAILER } from '@scop/mailer'
import { CONNECTION } from '@scop/config/orm'
import { ROUTES } from '@scop/api/app.routes'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from '@scop/api/app.service'
import { AppController } from '@scop/api/app.controller'
import { AdminModule } from '@scop/api/admin/admin.module'
import { MeetingModule } from '@scop/api/meeting/meeting.module'
import { MailerModule } from '@nestjs-modules/mailer'
import { RouterModule } from '@nestjs/core'

@Module({
  imports: [
    RouterModule.register(ROUTES),
    TypeOrmModule.forRoot(CONNECTION),
    MailerModule.forRoot(MAILER),
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
