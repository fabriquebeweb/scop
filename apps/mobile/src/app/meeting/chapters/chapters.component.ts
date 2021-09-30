import { MeetingChaptersDetailsComponent } from '@scop/mobile/meeting/chapters/details/details.component'
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Chapter, MeetingNavigationDTO } from '@scop/interfaces'
import { MeetingService } from '@scop/services'
import { Router, ActivatedRoute } from '@angular/router'
import { IonNav } from '@ionic/angular'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class MeetingChaptersComponent implements OnInit, OnDestroy {

  constructor(
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
