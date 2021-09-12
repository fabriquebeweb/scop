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
        .then(meeting => { (meeting) ? this.meeting = meeting : this.router.navigate(['/admin/meetings/new']) })
        .catch(() => this.router.navigate(['/error']))
    })
  }

  ngOnDestroy() : void
  {
    this.observer.unsubscribe()
  }

}
