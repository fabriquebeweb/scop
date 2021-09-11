import { Module } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { AdminMeetingsController } from './meetings/meetings.controller'
import { AdminMeetingsService } from './meetings/meetings.service'
import { AdminMembersController } from './members/members.controller';
import { AdminMembersService } from './members/members.service';

@Module({
  imports: [],
  controllers: [
    AdminController,
    AdminMeetingsController,
    AdminMembersController
  ],
  providers: [
    AdminService,
    AdminMeetingsService,
    AdminMembersService
  ]
})
export class AdminModule {}
