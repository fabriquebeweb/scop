import { Routes } from '@nestjs/core'
import { AdminModule } from '@scop/api/admin/admin.module'
import { MeetingModule } from '@scop/api/meeting/meeting.module'

export const ROUTES: Routes = [
  {
    path: 'admin',
    module: AdminModule
  },
  {
    path: 'meeting',
    module: MeetingModule
  }
]
