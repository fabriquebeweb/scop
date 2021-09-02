import { Component, Input, OnInit } from '@angular/core'
import { Meeting } from '@src/app/misc/entities/Meeting'

@Component({
  selector: 'meeting-summary',
  templateUrl: './summary.component.html'
})
export class AdminMeetingSummaryComponent implements OnInit {
  @Input() meeting: Meeting

  constructor() {}

  ngOnInit(): void {}
}
