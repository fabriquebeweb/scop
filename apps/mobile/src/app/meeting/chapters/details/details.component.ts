import { ActivatedRoute, Params } from '@angular/router'
import { LoadingController } from '@ionic/angular'
import { Component, OnInit } from '@angular/core'
import { MeetingService } from '@scop/services'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html',
})
export class MeetingChaptersDetailsComponent implements OnInit {

  chapter!: Chapter

  constructor(
    private readonly loading: LoadingController,
    public readonly service: MeetingService,
    private readonly route: ActivatedRoute
  ){}

  ngOnInit() : void
  {
    this.route.params.subscribe(params => this.getChapter(params))
  }

  getChapter(params: Params) : void
  {
    this.service.getMeetingChapter(params.chapter)
      .then(chapter => this.setChapter(chapter))
      .catch(console.log)
  }


  setChapter(chapter: Chapter) : void
  {
    this.chapter = chapter
  }

  async presentLoading() : Promise<void>
  {
    return await ( await this.loading.create() ).present()
  }

  // setChapter(params: Params) : void
  // {
  //   this.chapter = this.service.meeting.chapters.find(chapter => chapter.id == params.chapter) ?? this.chapter
  // }

}
