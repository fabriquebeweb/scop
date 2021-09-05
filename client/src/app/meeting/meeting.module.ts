import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingComponent } from '@src/app/meeting/meeting.component';
import { MeetingRoutingModule } from '@src/app/meeting/meeting.routing';
import { MeetingDocumentsComponent } from '@src/app/meeting/documents/documents.component';
import { MeetingChaptersComponent } from '@src/app/meeting/chapters/chapters.component';
import { MeetingPresenceComponent } from '@src/app/meeting/presence/presence.component';
import { FormComponent } from '@src/app/meeting/form/form.component';

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingPresenceComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
