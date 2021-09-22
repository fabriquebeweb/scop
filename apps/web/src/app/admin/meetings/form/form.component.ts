import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Chapter, NewMeetingDTO } from '@scop/interfaces'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

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
    if (this.service.checkMeeting(this.meeting))
    {
      this.service.setNewMeeting(this.meeting)
        .then(insert => this.addNewMeeting(insert.raw))
        .catch(console.log)

      this.resetMeeting()
    }
  }

  addNewMeeting(id: number) : void
  {
    this.service.getMeetingsSummary()
      .then(meetings => this.service.meetings = meetings)
      .catch(console.error)
  }

  onChaptersUpdate(chapters: Chapter[])
  {
    this.meeting.chapters = chapters
  }

  resetMeeting() : void
  {
    this.meeting.date = undefined
    this.meeting.meetingType = undefined
    this.meeting.chapters = []
  }

}
