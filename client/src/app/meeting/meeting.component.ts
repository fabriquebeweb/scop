import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Meeting } from '../misc/entities/Meeting'
import { MeetingService } from './meeting.service'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html'
})
export class MeetingComponent implements OnInit, OnDestroy {

  // meeting!: Meeting

  constructor(
    private readonly service: MeetingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.service.getMeeting(this.route.snapshot.queryParams.meeting)
      .then(meeting => {
        (meeting) ? this.service.set('MEETING', meeting) : this.error()
        if (/^\/meeting\/?\??.*$/.test(this.router.url)) this.redirect()
      })
      .catch(() => this.error())
  }

  ngOnDestroy() : void
  {
    this.service.unset('MEETING')
  }

  error()
  {
    this.router.navigate(['/error'])
  }

  redirect()
  {
    this.router.navigate(['/meeting/chapters'])
  }

}
