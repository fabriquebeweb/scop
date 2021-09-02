import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { MeetingComponent } from '@src/app/meeting/meeting.component';

@NgModule({
  declarations: [
    MeetingComponent
  ],
  imports: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MeetingModule { }
