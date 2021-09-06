import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MeetingChaptersResultComponent } from './chapters/result/result.component'
import { ChartsModule } from 'ng2-charts';
import { MeetingChaptersDetailsComponent } from './chapters/details/details.component'

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingPresenceComponent,
    MeetingChaptersResultComponent,
    MeetingChaptersDetailsComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([])
  ],
})
export class MeetingModule {}
