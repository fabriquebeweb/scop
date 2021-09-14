import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class AdminMeetingsChaptersComponent implements OnInit {

  @Input() chapters!: Chapter[]

  constructor() { }

  ngOnInit() : void
  {}

}
