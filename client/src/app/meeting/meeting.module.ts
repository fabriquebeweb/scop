import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MeetingChaptersResultComponent } from './chapters/result/result.component'
import {MatProgressBarModule} from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingPresenceComponent,
    MeetingChaptersResultComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule.forChild([])
  ],
})
export class MeetingModule {}
