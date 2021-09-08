import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Chapter } from 'src/app/misc/entities/Chapter'
import { Meeting } from 'src/app/misc/entities/Meeting'
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
        this.router.navigate([`/meeting/chapters/${this.chapters[0].id}`])
      })
      .catch(() => this.router.navigate(['/error']))
  }

}
