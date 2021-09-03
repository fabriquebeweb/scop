import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { MeetingComponent } from '@src/app/meeting/meeting.component';
import { MeetingRoutingModule } from '@src/app/meeting/meeting.routing.tns';
import { MeetingDocumentsComponent } from '@src/app/meeting/documents/documents.component';
import { MeetingChaptersComponent } from '@src/app/meeting/chapters/chapters.component';
import { MeetingPresenceComponent } from '@src/app/meeting/presence/presence.component';
import { MeetingChaptersResultComponent } from '@src/app/meeting/chapters/result/result.component';

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingPresenceComponent,
    MeetingChaptersResultComponent
  ],
  imports: [NativeScriptCommonModule, MeetingRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MeetingModule {}
