import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AdminMeetingsService } from '../meetings.service'
import { Meeting } from '@scop/interfaces'
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
    this.observer = this.route.params.subscribe(params => {
      this.service.getMeetingDetails(params.meeting)
        .then(meeting => this.setMeeting(meeting))
        .catch(() => this.onError())
    })
  }

  ngOnDestroy() : void
  {
    this.observer.unsubscribe()
  }

  onSubmit() : void
  {
    console.log(this.meeting)
  }

  setMeeting(meeting: Meeting) : void
  {
    meeting.date = meeting.date.replace(/:\d{2}.\d{3}Z$/, '')
    this.meeting = meeting
  }

  onError() : void
  {
    this.router.navigateByUrl('/admin/error')
  }

}
