import { Module } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { AdminMeetingsController } from './meetings/meetings.controller'

@Module({
  imports: [],
  controllers: [
    AdminController,
    AdminMeetingsController
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule {}
