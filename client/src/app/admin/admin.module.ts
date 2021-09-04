import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '@src/app/admin/admin.component';
import { AdminMeetingsComponent } from '@src/app/admin/meetings/meetings.component';
import { AdminMembersComponent } from '@src/app/admin/members/members.component';
import { AdminStatusComponent } from '@src/app/admin/status/status.component';
import { AdminThemeComponent } from '@src/app/admin/theme/theme.component';
import { AdminMeetingsModule } from './meetings/meetings.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminMembersComponent,
    AdminStatusComponent,
    AdminThemeComponent
  ],
  imports: [
    CommonModule,
    AdminMeetingsModule,
    RouterModule.forChild([])
  ],
  schemas: [
  ]
})
export class AdminModule { }
