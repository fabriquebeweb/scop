import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, Choice, Meeting, NewChapterDTO, NewChoiceDTO, Question } from '@scop/interfaces'

@Component({
  selector: 'chapter-form',
  templateUrl: './form.component.html'
})
export class AdminMeetingsChaptersFormComponent implements OnInit {

  @Input() meeting!: Meeting
  @Output() new: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  chapter!: NewChapterDTO
  newChoice: NewChoiceDTO = {
    title: undefined,
    enterprise: 1
  }

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

  newChapter() : void
  {
    this.service.setNewChapter(this.meeting.id, this.chapter)
      .then(chapter => this.addChapter(chapter))
      .catch(console.error)
  }

  addChapter(chapter: Chapter) : void
  {
    this.new.emit(chapter)
    this.clearChapter()
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
    this.chapter.question!.choices.push(choice)

    this.clearChoice()
  }

  removeChoice(choiceId: number) : void
  {
    this.chapter.question!.choices = this.chapter.question!.choices.filter(choice => choice.id != choiceId)
  }

  clearChapter() : void
  {
    this.chapter = {
      title: undefined,
      description: undefined,
      question: null,
      meeting: this.meeting.id
    }
  }

  clearChoice() : void
  {
    this.newChoice.title = undefined
  }

}
