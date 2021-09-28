import { MeetingChaptersDetailsComponent } from '@scop/mobile/meeting/chapters/details/details.component'
import { Chapter, MeetingNavigationDTO } from '@scop/interfaces'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MeetingService } from '@scop/services'
import { Router } from '@angular/router'
import { IonNav } from '@ionic/angular'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class MeetingChaptersComponent implements OnInit {

  @ViewChild('Navigation', { static: true }) nav!: IonNav
  chapters!: Chapter[]

  constructor(
    private readonly service: MeetingService,
    private readonly router: Router
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapters()
      .then(chapters => this.setChapters(chapters))
      .catch(() => this.onError())
  }

  setChapters(chapters: Chapter[]) : void
  {
    this.chapters = chapters
  }

  onError() : void
  {
    this.router.navigateByUrl('/meeting/error')
  }

  pushNav(chapter: MeetingNavigationDTO) : void
  {
    this.nav.push(MeetingChaptersDetailsComponent, chapter)
  }

  popNav() : void
  {
    this.nav.pop()
  }

}
