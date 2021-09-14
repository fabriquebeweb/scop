import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NewMeetingDTO } from '@scop/interfaces'
import { AdminMeetingsService } from '../meetings.service'

@Component({
  selector: 'meeting-form',
  templateUrl: './form.component.html'
})
export class AdminMeetingsFormComponent implements OnInit {

  meeting: NewMeetingDTO = {
    enterprise: 1,
    date: undefined,
    meetingType: undefined,
    chapters: []
  }

  constructor(
    public readonly service: AdminMeetingsService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {}

  onSubmit() : void
  {
    console.log(this.meeting)

    if (this.service.checkMeeting(this.meeting))
    {
      this.service.setNewMeeting(this.meeting)
        .then(console.log)
        .catch(console.log)

      this.onCancel()
    }
  }

  onCancel() : void
  {
    this.meeting.date = undefined
    this.meeting.meetingType = undefined
    this.meeting.chapters = []
  }

}
