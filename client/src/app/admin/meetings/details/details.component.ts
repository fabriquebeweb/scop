import { Component, Input, OnInit } from '@angular/core'
import { Meeting } from '@src/app/misc/entities/Meeting'
import { Chapter } from '@src/app/misc/entities/Chapter'

@Component({
  selector: 'meeting-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingDetailsComponent implements OnInit {
  @Input() meeting: Meeting;

  showForm: boolean = false;
  
  toggleForm() {
    this.showForm = !this.showForm
  }

  constructor() { }

  ngOnInit(): void {
  }

}
