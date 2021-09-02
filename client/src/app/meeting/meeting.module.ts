import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingComponent } from '@src/app/meeting/meeting.component';
import { MeetingRoutingModule } from './meeting.routing';

@NgModule({
  declarations: [
    MeetingComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
