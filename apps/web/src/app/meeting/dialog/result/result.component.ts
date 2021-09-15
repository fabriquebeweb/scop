import { Component, Input, OnInit } from '@angular/core'
import { Chapter, ChapterResultDTO } from '@scop/interfaces'
import { MeetingService } from '../../meeting.service'

@Component({
  selector: 'dialog-result',
  templateUrl: './result.component.html'
})
export class MeetingDialogResultComponent implements OnInit {

  @Input() chapter!: Chapter
  result!: ChapterResultDTO

  constructor(
    private readonly service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapterResult(1)
    // this.service.getMeetingChapterResult(this.chapter.id)
    .then(result => this.setChapterResult(result))
    .catch(console.log)
  }

  setChapterResult(result: ChapterResultDTO) : void
  {
    this.result = result
  }

}
