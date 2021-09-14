import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core'
import { AdminMeetingsService } from './meetings.service'
import { Router } from '@angular/router'
import { Meeting, MeetingType } from '@scop/interfaces'

@Component({
  selector: 'admin-meetings',
  templateUrl: './meetings.component.html',
})
export class AdminMeetingsComponent implements OnInit, OnDestroy {

  meetings!: Meeting[]

  constructor(
    private readonly service: AdminMeetingsService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.service.getMeetingsSummary()
      .then(meetings => this.setMeetings(meetings))
      .catch(() => this.onError())

    this.service.getMeetingTypes()
      .then(meetingTypes => this.setMeetingTypes(meetingTypes))
      .catch(console.log)
  }

  ngOnDestroy() : void
  {}

  setMeetings(meetings: Meeting[]) : void
  {
    this.meetings = meetings
    if (/^\/admin\/meetings\/?$/.test(this.router.url)) this.redirect()
  }

  setMeetingTypes(meetingTypes: MeetingType[]) : void
  {
    this.service.meetingTypes = meetingTypes
  }

  redirect() : void
  {
    this.router.navigateByUrl(`/admin/meetings/${(this.meetings) ? this.meetings[0].id : 'new'}`)
  }

  onError() : void
  {
    this.router.navigateByUrl('/admin/error')
  }

}
