import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminComponent } from '@src/app/admin/admin.component';
import { AdminRoutingModule } from '@src/app/admin/admin.routing.tns';
import { AdminMeetingsComponent } from '@src/app/admin/meetings/meetings.component';
import { AdminMembersComponent } from '@src/app/admin/members/members.component';
import { AdminStatusComponent } from '@src/app/admin/status/status.component';
import { AdminThemeComponent } from '@src/app/admin/theme/theme.component';
import { AdminMeetingDetailsComponent } from '@src/app/admin/meetings/details/details.component';
import { AdminMeetingSummaryComponent } from '@src/app/admin/meetings/summary/summary.component';
import { NativeScriptCommonModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AdminComponent,
    AdminMeetingsComponent,
    AdminMeetingDetailsComponent,
    AdminMeetingSummaryComponent,
    AdminMembersComponent,
    AdminStatusComponent,
    AdminThemeComponent
  ],
  imports: [
    NativeScriptCommonModule,
    AdminRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule { }
