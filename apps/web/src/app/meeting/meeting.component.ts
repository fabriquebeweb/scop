import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MeetingDialogComponent } from './dialog/dialog.component'
import { Meeting, MeetingDialogDTO } from '@scop/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { MeetingService } from './meeting.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html'
})
export class MeetingComponent implements OnInit, OnDestroy {

  dialog$!: Subscription

  constructor(
    public readonly service: MeetingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit() : void
  {
    // this.service.getMeeting(this.route.snapshot.queryParams.meeting)
    this.service.getMeeting(1)
      .then(meeting => this.setMeeting(meeting))
      .catch(() => this.onError())

    this.dialog$ = this.service.dialog$.subscribe(payload => this.onDialog(payload))
  }

  ngOnDestroy() : void
  {
    this.dialog$.unsubscribe()
  }

  onDialog(payload: MeetingDialogDTO)
  {
    this.dialog.open(MeetingDialogComponent, { maxHeight: '80vh', minWidth: '50vw', maxWidth: '80vw', data: payload })
  }

  setMeeting(meeting: Meeting) : void
  {
    (meeting) ? this.service.meeting = meeting : this.onError()
  }

  redirect() : void
  {
    this.router.navigateByUrl('/meeting/chapters')
  }

  onError() : void
  {
    this.router.navigateByUrl('/meeting/error')
  }

}
