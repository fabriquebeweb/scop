import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Chapter, Meeting } from '@scop/interfaces'
import { EVENTS } from '@scop/globals'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsChaptersDetailsComponent implements OnInit {

  archive!: Chapter
  @Input() chapter!: Chapter
  @Input() meeting!: Meeting
  @Output() update: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  @Output() remove: EventEmitter<Chapter> = new EventEmitter<Chapter>()

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
    this.service.socket.emit(EVENTS.ADMIN.MEETING.CHAPTER.START, { chapter: this.chapter.id })
  }

  endVote() : void
  {
    this.chapter.question!.state = false
    this.service.socket.emit(EVENTS.ADMIN.MEETING.CHAPTER.END, { chapter: this.chapter.id })
  }

  onUpdate()
  {
    this.service.resetChapter(this.meeting.id, this.chapter)
      .then(chapter => this.updateChapter(chapter))
      .catch(console.error)
  }

  onRemove()
  {
    this.service.unsetChapter(this.meeting.id, this.chapter.id)
      .then(() => this.removeChapter())
      .catch(console.error)
  }

  onCancel()
  {
    this.chapter = { ...this.archive }
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

}
