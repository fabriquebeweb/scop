import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, Meeting, NewChapterDTO } from '@scop/interfaces'

@Component({
  selector: 'chapter-form',
  templateUrl: './form.component.html'
})
export class AdminMeetingsChaptersFormComponent implements OnInit {

  @Input() meeting!: Meeting
  @Output() new: EventEmitter<Chapter> = new EventEmitter<Chapter>()
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
      meeting: this.meeting.id
    }
  }

}
