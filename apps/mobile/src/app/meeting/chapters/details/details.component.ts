import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { MeetingService } from '@scop/services'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html',
})
export class MeetingChaptersDetailsComponent implements OnInit {

  chapter!: Chapter

  constructor(
    public readonly service: MeetingService,
    private readonly route: ActivatedRoute
  ){}

  ngOnInit() : void
  {
    this.route.params.subscribe(params => this.setChapter(params))
  }

  setChapter(params: Params) : void
  {
    this.chapter = this.service.meeting.chapters.find(chapter => chapter.id == params.chapter) ?? this.chapter
  }

}
