import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, ChapterAnswerDTO, Choice, User } from '@scop/interfaces'
import { MeetingService } from '../../meeting.service'
import { InsertResult } from 'typeorm'

@Component({
  selector: 'dialog-form',
  templateUrl: './form.component.html'
})
export class MeetingDialogFormComponent implements OnInit {

  @Input() chapter!: Chapter
  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  answer!: ChapterAnswerDTO

  constructor(
    private service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapter(this.chapter.id)
      .then(chapter => this.setChapter(chapter))
      .catch(console.log)
  }

  setChapter(chapter: Chapter) : void
  {
    this.chapter = chapter

    this.answer = {
      chapter : chapter.id,
      user : 1,
      choice : null
    }
  }

  saveAbstention() : void
  {
    this.answer.choice = null
    this.saveAnswer()
  }

  saveAnswer() : void
  {
    this.service.postAnswer(this.answer)
      .then(result => this.onSave(result))
      .catch(console.log)

    // console.log(this.answer)
    // this.onClose()
  }

  onSave(result: InsertResult) : void
  {
    console.log(result)

    this.onClose()
  }

  onClose() : void
  {
    this.close.emit()
  }

}
