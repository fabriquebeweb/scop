import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminComponent } from './admin.component'
import { AdminMembersComponent } from './members/members.component'
import { AdminStatusComponent } from './status/status.component'
import { AdminThemeComponent } from './theme/theme.component'
import { AdminMeetingsModule } from './meetings/meetings.module'
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [
    AdminComponent,
    AdminMembersComponent,
    AdminStatusComponent,
    AdminThemeComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    AdminMeetingsModule,
    RouterModule.forChild([])
  ],
  schemas: [
  ]
})
export class AdminModule { }
