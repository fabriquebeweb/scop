import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MeetingChaptersResultComponent } from './chapters/result/result.component'
import { MeetingChaptersDetailsComponent } from './chapters/details/details.component'
import { MatTabsModule } from '@angular/material/tabs'
import { ChartsModule } from 'ng2-charts'
import { MeetingFormComponent } from './chapters/form/form.component'
import { MatRadioModule } from '@angular/material/radio'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingPresenceComponent,
    MeetingChaptersResultComponent,
    MeetingChaptersDetailsComponent,
    MeetingFormComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forChild([])
  ]
})
export class MeetingModule {}
