import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AdminMeetingsService } from '../meetings.service'
import { Chapter, Meeting } from '@scop/interfaces'
import { Subscription } from 'rxjs'

@Component({
  selector: 'meeting-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsDetailsComponent implements OnInit, OnDestroy {

  observer!: Subscription
  meeting!: Meeting

  constructor(
    public readonly service: AdminMeetingsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.observer = this.route.params.subscribe(params => this.refreshMeeting(params.meeting))
  }

  ngOnDestroy() : void
  {
    this.observer.unsubscribe()
  }

  onSubmit() : void
  {
    this.service.resetMeeting(this.meeting)
      .then(meeting => this.resetMeeting(meeting))
      .catch(() => this.onError())
  }

  onDelete() : void
  {
    this.service.unsetMeeting(this.meeting.id)
      .then(() => this.unsetMeeting())
      .catch(() => this.onError())

    this.router.navigateByUrl('/admin/meetings/new')
  }

  onError() : void
  {
    this.router.navigateByUrl('/admin/error')
  }

  refreshMeeting(id: number) : void
  {
    this.service.getMeetingDetails(id)
      .then(meeting => this.setMeeting(meeting))
      .catch(() => this.onError())
  }

  setMeeting(meeting: Meeting) : void
  {
    meeting.date = meeting.date.replace(/:\d{2}.\d{3}Z$/, '')
    this.meeting = meeting
  }

  resetMeeting(meeting: Meeting) : void
  {
    this.setMeeting(meeting)
    this.service.meetings[this.index(this.meeting)] = this.meeting
  }

  unsetMeeting() : void
  {
    this.service.meetings = this.service.meetings.filter(meeting => meeting.id != this.meeting.id)
  }

  updateChapters(chapters: Chapter[]) : void
  {
    this.meeting.chapters = chapters
  }

  index(meeting: Meeting) : number
  {
    return this.service.meetings.findIndex(obj => obj.id == meeting.id)
  }

}
