import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingComponent } from '@src/app/meeting/meeting.component';
import { MeetingDocumentsComponent } from '@src/app/meeting/documents/documents.component';
import { MeetingChaptersComponent } from '@src/app/meeting/chapters/chapters.component';
import { MeetingPresenceComponent } from '@src/app/meeting/presence/presence.component';
import { MeetingChaptersResultComponent } from '@src/app/meeting/chapters/result/result.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild([])
  ],
})
export class MeetingModule {}
