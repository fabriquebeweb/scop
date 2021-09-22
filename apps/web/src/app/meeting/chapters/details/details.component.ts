import { MeetingService } from '@scop/web/meeting/meeting.service'
import { Chapter, MeetingDialogDTO } from '@scop/interfaces'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class MeetingChaptersDetailsComponent implements OnInit, OnDestroy {

  params$!: Subscription
  chapter!: Chapter

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public service: MeetingService
  ) {}

  ngOnInit() : void
  {
    this.params$ = this.route.params.subscribe(params => this.paramsChapter(params))
  }

  ngOnDestroy() : void
  {
    this.params$.unsubscribe()
  }

  paramsChapter(params: Params) : void
  {
    this.service.getMeetingChapter(params.chapter)
      .then(chapter => this.setChapter(chapter))
      .catch(() => this.onError())
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
