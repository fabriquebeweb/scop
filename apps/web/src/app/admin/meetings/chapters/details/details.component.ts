import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Chapter, Choice, Meeting, NewChoiceDTO } from '@scop/interfaces'
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
    title: '',
    enterprise: 1
  }

  constructor(
    public readonly service: AdminMeetingsService
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

  changeOptions(title: string) : void
  {
    this.newChoice.title = title
    this.service.socket.emit(EVENTS.ADMIN.CHOICE.TMP, this.newChoice)
  }

  addNewChoice() : void
  {
    (this.choiceExists(this.newChoice) || !this.newChoice.title) ?
      this.clearChoice : this.service.setNewChoice(this.newChoice)
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
    if (!this.choiceExists(choice)) this.chapter.question!.choices!.push(choice)

    this.clearChoice()
  }

  choiceExists(choice: Choice | NewChoiceDTO)
  {
    return (this.chapter.question!.choices!.find(obj => obj.title === choice.title)) ? true : false
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
