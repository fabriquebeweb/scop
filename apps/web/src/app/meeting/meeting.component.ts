import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Meeting } from '@scop/interfaces'
import { MeetingService } from './meeting.service'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html'
})
export class MeetingComponent implements OnInit, OnDestroy {

  constructor(
    public readonly service: MeetingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    // this.service.getMeeting(this.route.snapshot.queryParams.meeting)
    this.service.getMeeting(1)
      .then(meeting => this.setMeeting(meeting))
      .catch(() => this.onError())
  }

  ngOnDestroy() : void
  {}

  setMeeting(meeting: Meeting) : void
  {
    (meeting) ? this.service.meeting = meeting : this.onError()
    if (/^\/meeting\/?\??.*$/.test(this.router.url)) this.redirect()
  }

  redirect() : void
  {
    this.router.navigateByUrl('/meeting/chapters')
  }

  onError() : void
  {
    this.router.navigateByUrl('/error')
  }

}
