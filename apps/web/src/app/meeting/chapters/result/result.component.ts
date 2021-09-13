import { Component, Input, OnInit } from '@angular/core'
import { Chapter, ChapterResultDTO } from '@scop/interfaces'
import { MeetingService } from '../../meeting.service'

@Component({
  selector: 'chapter-result',
  templateUrl: './result.component.html'
})
export class MeetingChaptersResultComponent implements OnInit {

  @Input() chapter!: Chapter
  result!: ChapterResultDTO

  constructor(
    private readonly service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapterResult(2)
    // this.service.getMeetingChapterResult(this.chapter.id)
    .then((result) => {
      this.result = result
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
