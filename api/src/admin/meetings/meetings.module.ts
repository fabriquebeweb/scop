import { Module } from '@nestjs/common'
import { AdminMeetingsController } from './meetings.controller'

@Module({
  controllers: [AdminMeetingsController]
})
export class AdminMeetingsModule {}
