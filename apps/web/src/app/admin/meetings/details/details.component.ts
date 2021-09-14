import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AdminMeetingsService } from '../meetings.service'
import { Chapter, Meeting } from '@scop/interfaces'
import { Subscription } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'

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

  onUpdateDialog() : void
  {}

  onSubmit() : void
  {
    // this.meeting = this.meetingArchive
    console.log(this.meeting)
    // console.log(this.meeting.chapters)
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

  resetMeeting() : void
  {}

  unsetMeeting() : void
  {}

  updateChapters(chapters: Chapter[]) : void
  {
    this.meeting.chapters = chapters
  }

}
