import { Meeting, MeetingDialogDTO } from '@scop/interfaces'
import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { MeetingService } from '@scop/services'
import { Subscription } from 'rxjs'
import { MeetingDialogComponent } from './dialog/dialog.component'

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
    public dialog: ModalController
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

  async onDialog(payload: MeetingDialogDTO)
  {
    const modal = await this.dialog.create({
      component: MeetingDialogComponent,
      componentProps: { payload: payload },
      swipeToClose: true
    })
    return await modal.present()
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
