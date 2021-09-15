import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MeetingDialogComponent } from './dialog/dialog.component'
import { Meeting, MeetingDialogDTO } from '@scop/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { MeetingService } from './meeting.service'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html'
})
export class MeetingComponent implements OnInit, OnDestroy {

  constructor(
    public readonly service: MeetingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() : void
  {
    // this.service.getMeeting(this.route.snapshot.queryParams.meeting)
    this.service.getMeeting(1)
      .then(meeting => this.setMeeting(meeting))
      .catch(() => this.onError())

    this.service.dialog.subscribe(chapter => this.onDialog(chapter))
  }

  ngOnDestroy() : void
  {}

  onDialog(chapter: MeetingDialogDTO)
  {
    this.dialog.open(MeetingDialogComponent, { data: chapter })
  }

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
