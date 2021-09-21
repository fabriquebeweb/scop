import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Meeting, NewChapterDTO, Question } from '@scop/interfaces'
import { AdminMeetingsService } from '../../meetings.service'

@Component({
  selector: 'chapter-question',
  templateUrl: './question.component.html'
})
export class AdminMeetingsChaptersQuestionComponent implements OnInit {

  @Input() meeting!: Meeting
  @Input() question?: Question | null
  @Output() new: EventEmitter<Question> = new EventEmitter<Question>()
  @Output() update: EventEmitter<Question> = new EventEmitter<Question>()
  @Output() remove: EventEmitter<Question> = new EventEmitter<Question>()
  chapter!: NewChapterDTO

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  ngOnInit() : void
  {
    this.chapter = {
      title: undefined,
      description: undefined,
      question: null,
      meeting: this.meeting.id
    }
  }

  // newChapter() : void
  // {
  //   this.service.setNewChapter(this.meeting.id, this.chapter)
  //     .then(insert => this.setChapter(insert.raw))
  //     .catch(console.error)
  // }

  // setChapter(chapterId: number) : void
  // {
  //   this.service.getChapter(this.meeting.id, chapterId)
  //     .then(chapter => this.addChapter(chapter))
  //     .catch(console.error)
  // }

  // addChapter(chapter: Chapter) : void
  // {
  //   this.new.emit(chapter)
  //   this.clearChapter()
  // }

  clearChapter() : void
  {
    this.chapter = {
      title: undefined,
      description: undefined,
      question: null,
      meeting: this.meeting.id
    }
  }

}
