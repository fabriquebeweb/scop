import { Module } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { AdminMeetingsController } from './meetings/meetings.controller'
import { AdminMeetingsService } from './meetings/meetings.service';

@Module({
  imports: [],
  controllers: [
    AdminController,
    AdminMeetingsController
  ],
  providers: [
    AdminService,
    AdminMeetingsService
  ]
})
export class AdminModule {}
