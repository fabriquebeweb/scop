import { Module } from '@nestjs/common'
import { MeetingController } from './meeting.controller'

@Module({
  imports: [],
  controllers: [
    MeetingController
  ],
  providers: []
})
export class MeetingModule {}
