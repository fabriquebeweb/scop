import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { AdminController } from './admin.controller'
import { routes } from './admin.routes'
import { AdminService } from './admin.service'
import { AdminMeetingsModule } from './meetings/meetings.module'

@Module({
  imports: [
    // RouterModule.f(routes),
    AdminMeetingsModule,
  ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
