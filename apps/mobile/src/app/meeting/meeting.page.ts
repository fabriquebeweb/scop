import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { MeetingService } from '@scop/services'
import { Meeting, MeetingDialogDTO } from '@scop/interfaces'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.page.html'
})
export class MeetingPage implements OnInit {

  dialog$!: Subscription

  constructor(
    public readonly service: MeetingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ){}

  ngOnInit() : void
  {
    // this.service.getMeeting(this.route.snapshot.queryParams.id)
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
    console.log(payload)
    // this.dialog.open(MeetingDialogComponent, { maxHeight: '80vh', minWidth: '50vw', maxWidth: '80vw', data: payload })
  }

  setMeeting(meeting: Meeting) : void
  {
    (meeting) ? this.service.meeting = meeting : this.onError()
  }

  onError() : void
  {
    this.router.navigateByUrl('/meeting/error')
  }

}
