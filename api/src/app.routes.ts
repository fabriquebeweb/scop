import { Routes } from '@nestjs/core'
import { AdminModule } from './admin/admin.module'
import { AdminMeetingsModule } from './admin/meetings/meetings.module'
import { MeetingModule } from './meeting/meeting.module'

export const routes: Routes = [
  {
    path: 'admin',
    module: AdminModule,
    children: [
      {
        path: 'meetings',
        module: AdminMeetingsModule  
      }
    ]
  },
  {
    path: 'meeting',
    module: MeetingModule
  }
]
