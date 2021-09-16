import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, ChapterResultDTO } from '@scop/interfaces'
import { MeetingService } from '../../meeting.service'

@Component({
  selector: 'dialog-result',
  templateUrl: './result.component.html'
})
export class MeetingDialogResultComponent implements OnInit {

  @Input() chapter!: Chapter
  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  chapterResult!: ChapterResultDTO

  constructor(
    private readonly service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapterResult(this.chapter.id)
      .then(result => this.setChapterResult(result))
      .catch(console.log)
  }

  setChapterResult(result: ChapterResultDTO) : void
  {
    this.chapterResult = result
  }

  onClose() : void
  {
    this.close.emit()
  }

}
