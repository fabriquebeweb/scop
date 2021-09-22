import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, Meeting, NewChapterDTO, Question } from '@scop/interfaces'
import { Subject } from 'rxjs'
import { AdminMeetingsService } from '../../meetings.service'

@Component({
  selector: 'chapter-question',
  templateUrl: './question.component.html'
})
export class AdminMeetingsChaptersQuestionComponent implements OnInit {

  @Input() meeting!: Meeting
  @Input() subject!: Subject<Question|null>
  @Input() chapter!: Chapter | NewChapterDTO
  @Output() update = new EventEmitter<Question|null>()
  question!: Question | null

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  ngOnInit() : void
  {
    this.setQuestion()
    this.subject.subscribe(() => this.setQuestion())
    // this.setQuestion()
    // this.chapter = {
    //   title: undefined,
    //   description: undefined,
    //   question: null,
    //   meeting: this.meeting.id
    // }
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
    // this.chapter = {
    //   title: undefined,
    //   description: undefined,
    //   question: null,
    //   meeting: this.meeting.id
    // }
  }

  onChange()
  {
    // console.log(this.chapter.question === this.archive)
    // console.log(this.archive)
    // console.log(this.chapter.question)
    this.update.emit(this.question)
    // this.setQuestion()
  }

  setQuestion() : void
  {
    // this.question = this.chapter.question
  }

}
