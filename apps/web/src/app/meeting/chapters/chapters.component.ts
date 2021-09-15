import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Chapter } from '@scop/interfaces'
import { MeetingService } from '../meeting.service'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class MeetingChaptersComponent implements OnInit {

  chapters!: Chapter[]

  constructor(
    private readonly service: MeetingService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.service.getMeetingChapters()
      .then(chapters => this.setChapters(chapters))
      .catch(() => this.onError())
  }

  setChapters(chapters: Chapter[]) : void
  {
    this.chapters = chapters
    if (this.chapters.length) this.router.navigateByUrl(`/meeting/chapters/${this.chapters[0].id}`)
  }

  onError() : void
  {
    this.router.navigateByUrl('/meeting/error')
  }

}
