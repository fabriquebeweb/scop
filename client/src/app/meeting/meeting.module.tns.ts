import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { MeetingComponent } from '@src/app/meeting/meeting.component';
import { MeetingRoutingModule } from './meeting.routing.tns';

@NgModule({
  declarations: [
    MeetingComponent
  ],
  imports: [
    NativeScriptCommonModule,
    MeetingRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MeetingModule { }
