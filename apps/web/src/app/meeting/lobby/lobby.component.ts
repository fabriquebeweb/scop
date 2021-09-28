import { Component, OnInit } from '@angular/core'
import { MeetingService } from '@scop/services'

@Component({
  selector: 'meeting-lobby',
  templateUrl: './lobby.component.html',
})
export class MeetingLobbyComponent implements OnInit {

  constructor(
    public readonly service: MeetingService
  ){}

  ngOnInit() : void
  {}

}
