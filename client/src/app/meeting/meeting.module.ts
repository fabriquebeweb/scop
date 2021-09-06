import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MeetingChaptersResultComponent } from './chapters/result/result.component'
import { MatTabsModule } from '@angular/material/tabs'
import { ChartsModule } from 'ng2-charts'

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
    ChartsModule,
    MatTabsModule,
    RouterModule.forChild([])
  ],
})
export class MeetingModule {}
