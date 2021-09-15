import { Component, Input, OnInit } from '@angular/core'
import { Chapter, ChapterAnswerDTO, Choice, User } from '@scop/interfaces'
import { MeetingService } from '../../meeting.service'
import { InsertResult } from 'typeorm'

@Component({
  selector: 'dialog-form',
  templateUrl: './form.component.html'
})
export class MeetingDialogFormComponent implements OnInit {

  @Input() chapter!: Chapter
  answer: ChapterAnswerDTO = {
    chapter : this.chapter.id,
    user : 5,
    choice : null
  }

  constructor(
    private service: MeetingService
  ){}

  ngOnInit() : void
  {
    // this.service.getMeetingChapter(this.chapter.id)
    this.service.getMeetingChapter(2)
      .then(chapter => this.setChapter(chapter))
      .catch(console.log)
  }

  setChapter(chapter: Chapter) : void
  {
    this.chapter = chapter
  }

  setChoice(choice: Choice) : void
  {
    this.answer.choice = choice.id
  }

  saveAnswer() : void
  {
    this.service.postAnswer(this.answer)
      .then(result => this.onSave(result))
      .catch(console.log)           
  }

  onSave(result: InsertResult) : void
  {
    console.log(result)
  }

}
