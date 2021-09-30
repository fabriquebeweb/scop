import { MeetingChaptersDetailsComponent } from '@scop/mobile/meeting/chapters/details/details.component'
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Chapter, MeetingNavigationDTO } from '@scop/interfaces'
import { Router, ActivatedRoute } from '@angular/router'
import { LoadingController } from '@ionic/angular'
import { MeetingService } from '@scop/services'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class MeetingChaptersComponent implements OnInit, OnDestroy {

  constructor(
    private readonly loading: LoadingController,
    public readonly service: MeetingService,
    private readonly router: Router
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapters()
      .then(chapters => this.setChapters(chapters))
      .catch(() => this.onError())
  }

  ngOnDestroy() : void
  {}

  setChapters(chapters: Chapter[]) : void
  {
    this.service.meeting.chapters = chapters
  }

  onError() : void
  {
    this.router.navigateByUrl('/meeting/error')
  }

}
