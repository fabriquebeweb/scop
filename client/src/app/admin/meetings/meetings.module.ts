import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminMeetingQuestionComponent } from './question/question.component'
import { AdminMeetingFormComponent } from './form/form.component'
import { AdminMeetingDetailsComponent } from './details/details.component'
import { AdminMeetingChapterComponent } from './chapter/chapter.component'
import { AdminMeetingSummaryComponent } from './summary/summary.component'
import { RouterModule } from '@angular/router'
import { AdminMeetingsComponent } from './meetings.component'

@NgModule({
  declarations: [
    AdminMeetingsComponent,
    AdminMeetingDetailsComponent,
    AdminMeetingSummaryComponent,
    AdminMeetingChapterComponent,
    AdminMeetingQuestionComponent,
    AdminMeetingFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ]
})
export class AdminMeetingsModule { }
