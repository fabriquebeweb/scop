import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatTabsModule } from '@angular/material/tabs'
import { AdminComponent } from '@scop/web/admin/admin.component'
import { AdminMembersModule } from '@scop/web/admin/members/members.module'
import { AdminThemeComponent } from '@scop/web/admin/theme/theme.component'
import { AdminMeetingsModule } from '@scop/web/admin/meetings/meetings.module'
import { AdminStatusComponent } from '@scop/web/admin/status/status.component'

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
