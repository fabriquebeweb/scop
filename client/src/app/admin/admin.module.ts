import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from '@src/app/admin/admin.component';
import { AdminRoutingModule } from '@src/app/admin/admin.routing';
import { AdminMeetingsComponent } from '@src/app/admin/meetings/meetings.component';
import { AdminMembersComponent } from '@src/app/admin/members/members.component';
import { AdminStatusComponent } from '@src/app/admin/status/status.component';
import { AdminThemeComponent } from '@src/app/admin/theme/theme.component';
import { AdminMeetingDetailsComponent } from '@src/app/admin/meetings/details/details.component';
import { AdminMeetingSummaryComponent } from '@src/app/admin/meetings/summary/summary.component';
import { AdminMeetingChaptersComponent } from './meetings/chapters/chapters.component';
import { AdminMeetingQuestionComponent } from './meetings/question/question.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminMeetingsComponent,
    AdminMeetingDetailsComponent,
    AdminMeetingSummaryComponent,
<<<<<<< HEAD
    AdminMeetingChaptersComponent,
    AdminMeetingQuestionComponent,
    MembersComponent,
    StatusComponent,
    ThemeComponent
=======
    AdminMembersComponent,
    AdminStatusComponent,
    AdminThemeComponent
>>>>>>> 8647a998d7c271f35ebadd33924a02f42ee8388c
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas: [
  ]
})
export class AdminModule { }
