import { Module } from '@nestjs/common'
import { AdminService } from '@scop/api/admin/admin.service'
import { AdminController } from '@scop/api/admin/admin.controller'
import { AdminMembersService } from '@scop/api/admin/members/members.service'
import { AdminMeetingsService } from '@scop/api/admin/meetings/meetings.service'
import { AdminMembersController } from '@scop/api/admin/members/members.controller'
import { AdminMeetingsController } from '@scop/api/admin/meetings/meetings.controller'

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
