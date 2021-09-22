import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Chapter, Choice, Meeting, NewChoiceDTO, Question } from '@scop/interfaces'
import { EVENTS } from '@scop/globals'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsChaptersDetailsComponent implements OnInit {

  archive!: Chapter
  @Input() index!: number
  @Input() chapter!: Chapter
  @Input() meeting!: Meeting
  @Output() update: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  @Output() remove: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  newChoice: NewChoiceDTO = {
    title: undefined,
    enterprise: 1
  }

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  ngOnInit() : void
  {
    this.archive = { ...this.chapter }
  }

  startVote() : void
  {
    this.chapter.question!.state = true
    this.service.socket.emit(EVENTS.ADMIN.CHAPTER.START, { question: this.chapter.question!.id })
  }

  endVote() : void
  {
    this.chapter.question!.state = false
    this.service.socket.emit(EVENTS.ADMIN.CHAPTER.END, { question: this.chapter.question!.id })
  }

  onUpdate() : void
  {
    this.service.resetChapter(this.meeting.id, this.chapter)
      .then(chapter => this.updateChapter(chapter))
      .catch(console.error)
  }

  onRemove() : void
  {
    this.service.unsetChapter(this.meeting.id, this.chapter.id)
      .then(() => this.removeChapter())
      .catch(console.error)
  }

  // onQuestionUpdate(question: Question|null) : void
  // {
  //   this.chapter.question = question

  //   console.log('CHAPTER')
  //   console.log(this.chapter.question)
  //   console.log('ARCHIVE')
  //   console.log(this.archive.question)

  //   // this.questionSubject.next(this.chapter.question)
  //   this.questionSubject.next()
  // }

  onCancel() : void
  {
    this.chapter = { ...this.archive }
  }

  createQuestion() : void
  {
    this.chapter.question = {
      title: undefined,
      choices: [],
      state: null
    }
  }

  addChoice() : void
  {
    this.service.setNewChoice(this.newChoice)
      .then(insert => this.getChoice(insert.raw))
      .catch(console.error)
  }

  getChoice(id: number) : void
  {
    this.service.getChoice(id)
      .then(choice => this.setChoice(choice))
      .catch(console.error)
  }

  setChoice(choice: Choice) : void
  {
    this.chapter.question!.choices!.push(choice)

    this.clearChoice()
  }

  removeChoice(choiceId: number) : void
  {
    this.chapter.question!.choices = this.chapter.question!.choices!.filter(choice => choice.id != choiceId)
  }

  updateChapter(chapter: Chapter) : void
  {
    this.archive = { ...chapter }
    this.update.emit(chapter)
  }

  removeChapter() : void
  {
    this.remove.emit(this.chapter)
  }

  clearChoice() : void
  {
    this.newChoice.title = undefined
  }

}
