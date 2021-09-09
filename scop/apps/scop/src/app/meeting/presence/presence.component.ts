import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from '../../misc/entities/Chapter'

@Component({
  selector: 'meeting-presence',
  templateUrl: './presence.component.html'
})
export class MeetingPresenceComponent implements OnInit {

  chapters!: Chapter[]

  constructor() {}

  ngOnInit() : void
  {}

}
