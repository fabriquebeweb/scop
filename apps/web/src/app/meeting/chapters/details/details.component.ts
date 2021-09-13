import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Chapter } from '@scop/interfaces'
import { Subscription } from 'rxjs'
import { MeetingService } from '../../meeting.service'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class MeetingChaptersDetailsComponent implements OnInit, OnDestroy {

  observer!: Subscription
  chapter!: Chapter

  constructor(
    private readonly service: MeetingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.observer = this.route.params.subscribe(params => {
      this.service.getMeetingChapter(params.chapter)
        .then(chapter => {
          this.chapter = chapter
        })
        .catch(() => this.router.navigate(['/meeting']))
    })
  }

  ngOnDestroy() : void
  {
    this.observer.unsubscribe()
  }

}
