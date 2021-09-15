import { Component, OnInit, OnDestroy } from '@angular/core'
import { AdminMeetingsService } from './meetings.service'
import { Router } from '@angular/router'
import { Meeting, MeetingType } from '@scop/interfaces'

@Component({
  selector: 'admin-meetings',
  templateUrl: './meetings.component.html',
})
export class AdminMeetingsComponent implements OnInit, OnDestroy {

  constructor(
    public readonly service: AdminMeetingsService,
    private readonly router: Router
  ){}

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
    this.service.meetings = meetings
    if (/^\/admin\/meetings\/?$/.test(this.router.url)) this.redirect()
  }

  setMeetingTypes(meetingTypes: MeetingType[]) : void
  {
    this.service.meetingTypes = meetingTypes
  }

  redirect() : void
  {
    this.router.navigateByUrl(`/admin/meetings/${(this.service.meetings) ? this.service.meetings[0].id : 'new'}`)
  }

  onError() : void
  {
    this.router.navigateByUrl('/admin/error')
  }

}
