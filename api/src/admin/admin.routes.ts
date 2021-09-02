import { Routes } from '@nestjs/core'
import { AdminMeetingsModule } from './meetings/meetings.module'

export const routes: Routes = [
  {
    path: 'meetings',
    module: AdminMeetingsModule
  }
]
