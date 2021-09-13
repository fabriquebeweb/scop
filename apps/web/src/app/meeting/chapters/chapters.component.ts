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
      .then(chapters => {
        this.chapters = chapters
        if (this.chapters.length) this.router.navigate([`/meeting/chapters/${this.chapters[0].id}`])
      })
      .catch(() => this.router.navigate(['/error']))
  }

}
