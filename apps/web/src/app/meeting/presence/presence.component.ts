import { Component, OnInit } from '@angular/core'
import { Chapter } from '@scop/interfaces'

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
