import { Component, Input, OnInit } from '@angular/core'
import { Meeting } from '@src/app/misc/entities/Meeting'

@Component({
  selector: 'meeting-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingDetailsComponent implements OnInit {
  @Input() meeting: Meeting

  constructor() { }

  ngOnInit(): void {
  }

}
