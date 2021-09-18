import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Chapter, MeetingDialogDTO } from '@scop/interfaces'
import { Subscription } from 'rxjs'
import { MeetingService } from '../../meeting.service'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class MeetingChaptersDetailsComponent implements OnInit, OnDestroy {

  paramSub!: Subscription
  chapter!: Chapter

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public service: MeetingService
  ) {}

  ngOnInit() : void
  {
    this.paramSub = this.route.params.subscribe(params => {
      this.service.getMeetingChapter(params.chapter)
        .then(chapter => this.setChapter(chapter))
        .catch(() => this.onError())
    })
  }

  ngOnDestroy() : void
  {
    this.paramSub.unsubscribe()
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
