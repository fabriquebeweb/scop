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
  meeting?: Meeting

  constructor(
    private readonly service: AdminMeetingsService,
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

  setMeeting(meeting: Meeting) : void
  {
    (meeting) ? this.meeting = meeting : this.router.navigateByUrl('/admin/meetings/new')
  }

  onError() : void
  {
    this.router.navigateByUrl('/admin/error')
  }

}
