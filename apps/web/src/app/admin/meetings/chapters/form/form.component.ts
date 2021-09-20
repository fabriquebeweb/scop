import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, Meeting, NewChapterDTO } from '@scop/interfaces'
import { AdminMeetingsService } from '../../meetings.service'

@Component({
  selector: 'chapter-form',
  templateUrl: './form.component.html'
})
export class AdminMeetingsChaptersFormComponent implements OnInit {

  @Input() meeting!: Meeting
  @Output() new: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  chapter: NewChapterDTO = {
    title: undefined,
    description: undefined,
    question: null,
    choices: [],
    meeting: this.meeting.id
  }

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  ngOnInit() : void
  {}

  newChapter() : void
  {
    this.service.setNewChapter(this.meeting.id, this.chapter)
      .then(insert => this.setChapter(insert.raw))
      .catch(console.error)
  }

  setChapter(chapterId: number) : void
  {
    this.service.getChapter(this.meeting.id, chapterId)
      .then(chapter => this.addChapter(chapter))
      .catch(console.error)
  }

  addChapter(chapter: Chapter) : void
  {
    this.new.emit(chapter)
    this.clearChapter()
  }

  clearChapter() : void
  {
    this.chapter = {
      title: undefined,
      description: undefined,
      question: null,
      choices: [],
      meeting: this.meeting.id
    }
  }

}
