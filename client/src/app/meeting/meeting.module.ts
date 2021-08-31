import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from '@src/app/meeting/meeting.component';
import { LobbyComponent } from '@src/app/meeting/lobby/lobby.component';



@NgModule({
  declarations: [
    MeetingComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule
  ],
})
export class MeetingModule { }
