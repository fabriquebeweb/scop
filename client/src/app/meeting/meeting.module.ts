import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MeetingChaptersResultComponent } from './chapters/result/result.component'
import { ChartsModule } from 'ng2-charts'
import { MeetingFormComponent } from './form/form.component'
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingPresenceComponent,
    MeetingChaptersResultComponent,
    MeetingFormComponent,
    
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatRadioModule,
    RouterModule.forChild([])
    
  ],
})
export class MeetingModule {}
