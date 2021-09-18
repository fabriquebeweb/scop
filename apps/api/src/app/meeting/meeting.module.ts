import { Module } from '@nestjs/common'
import { MeetingController } from './meeting.controller'
import { MeetingGateway } from './meeting.gateway'
import { MeetingService } from './meeting.service'

@Module({
  imports: [],
  controllers: [
    MeetingController
  ],
  providers: [
    MeetingGateway,
    MeetingService
  ]
})
export class MeetingModule {}
