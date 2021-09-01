import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AdminComponent } from '@src/app/admin/admin.component';
import { AdminRoutingModule } from '@src/app/admin/admin.routing';
import { AdminMeetingsComponent } from '@src/app/admin/meetings/meetings.component';
import { MembersComponent } from '@src/app/admin/members/members.component';
import { StatusComponent } from '@src/app/admin/status/status.component';
import { ThemeComponent } from '@src/app/admin/theme/theme.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminMeetingsComponent,
    MembersComponent,
    StatusComponent,
    ThemeComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  schemas: [
  ]
})
export class AdminModule { }
