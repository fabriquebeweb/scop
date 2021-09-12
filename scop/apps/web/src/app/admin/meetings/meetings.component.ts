import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core'
import { AdminMeetingsService } from './meetings.service'
import { Router } from '@angular/router'
import { Meeting } from '../../misc/entities/Meeting'

@Component({
  selector: 'admin-meetings',
  templateUrl: './meetings.component.html',
})
export class AdminMeetingsComponent implements OnInit, OnChanges, OnDestroy {

  meetings!: Meeting[]

  constructor(
    private readonly service: AdminMeetingsService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.service.getMeetingsSummary()
      .then(meetings => {
        this.meetings = meetings
        if (/^\/admin\/meetings\/?$/.test(this.router.url)) this.redirect()
      })
      .catch(() => this.router.navigate(['/error']))
  }

  ngOnChanges() : void
  {}

  ngOnDestroy() : void
  {}

  redirect() : void
  {
    this.router.navigate(['/admin/meetings/' + ((this.meetings) ? this.meetings[0].id : 'new')])
  }

}
