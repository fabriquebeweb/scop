import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
})
export class LobbyComponent implements OnInit {

  constructor(
    public readonly service: MeetingService
  ) { }

  ngOnInit(): void {
  }

}
