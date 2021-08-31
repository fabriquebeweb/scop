import { Routes } from '@nestjs/core'
import { AdminModule } from './admin/admin.module'
import { MeetingModule } from './meeting/meeting.module'

export const routes: Routes = [
  {
    path: 'admin',
    module: AdminModule
  },
  {
    path: 'meeting',
    module: MeetingModule
  }
]