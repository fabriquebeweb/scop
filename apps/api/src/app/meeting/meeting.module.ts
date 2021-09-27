import { Module } from '@nestjs/common'
import { MeetingController } from '@scop/api/meeting/meeting.controller'
import { MeetingGateway } from '@scop/api/meeting/meeting.gateway'
import { MeetingService } from '@scop/api/meeting/meeting.service'

@Module({
  imports: [],
  controllers: [
    MeetingController
  ],
  providers: [
    MeetingGateway,
    MeetingService
  ],
  exports: [
    MeetingService
  ]
})
export class MeetingModule {}
