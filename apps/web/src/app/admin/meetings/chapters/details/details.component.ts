import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { Chapter } from '@scop/interfaces'
import { EVENTS } from '@scop/globals'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsChaptersDetailsComponent implements OnInit {

  @Input() chapter!: Chapter
  @Input() state: boolean|null = false
  @Output() update: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  @Output() remove: EventEmitter<Chapter> = new EventEmitter<Chapter>()

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  ngOnInit() : void
  {}

  startVote() : void
  {
    this.chapter.state = true
    this.service.socket.emit(EVENTS.ADMIN.MEETING.CHAPTER.START, { chapter: this.chapter.id })
  }

  endVote() : void
  {
    this.chapter.state = false
    this.service.socket.emit(EVENTS.ADMIN.MEETING.CHAPTER.END, { chapter: this.chapter.id })
  }

  onUpdate()
  {
    this.update.emit(this.chapter)
  }

  onCancel()
  {
    // this.update.emit(this.chapter)
  }

  onRemove()
  {
    this.remove.emit(this.chapter)
  }

}
