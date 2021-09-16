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
        .then(chapter => this.setChapter(chapter))
        .catch(() => this.onError())
    })
  }

  ngOnDestroy() : void
  {
    this.observer.unsubscribe()
  }

  openDialog(id: number)
  {
    this.service.dialog.next({ chapter: id })
  }

  setChapter(chapter: Chapter) : void
  {
    this.chapter = chapter
  }

  onError() : void
  {
    this.router.navigateByUrl('/meeting/error')
  }

}
