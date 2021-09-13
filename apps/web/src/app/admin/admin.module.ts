import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminComponent } from './admin.component'
import { AdminStatusComponent } from './status/status.component'
import { AdminThemeComponent } from './theme/theme.component'
import { AdminMeetingsModule } from './meetings/meetings.module'
import { MatTabsModule } from '@angular/material/tabs';
import { AdminMembersModule } from './members/members.module'

@NgModule({
  declarations: [
    AdminComponent,
    AdminStatusComponent,
    AdminThemeComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    AdminMeetingsModule,
    AdminMembersModule,
    RouterModule.forChild([]),
  ]
})
export class AdminModule {}
