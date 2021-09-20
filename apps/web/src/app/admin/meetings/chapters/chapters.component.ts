import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter, Meeting } from '@scop/interfaces'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class AdminMeetingsChaptersComponent implements OnInit {

  @Input() meeting!: Meeting
  @Input() chapters!: Chapter[]
  @Output() update: EventEmitter<Chapter[]> = new EventEmitter<Chapter[]>()
  isForm: boolean = false

  constructor(){}

  ngOnInit() : void
  {}

  onNewChapter(chapter: Chapter) : void
  {
    this.chapters.push(chapter)
    this.update.emit(this.chapters)
  }

  onChapterUpdate(chapter: Chapter) : void
  {
    this.chapters[this.index(chapter)] = chapter
    this.update.emit(this.chapters)
  }

  onChapterRemove(targetChapter: Chapter) : void
  {
    this.chapters = this.chapters.filter(chapter => chapter != targetChapter)
    this.update.emit(this.chapters)
  }

  toggleForm() : void
  {
    this.isForm = !this.isForm
  }

  index(chapter: Chapter) : number
  {
    return this.chapters.findIndex(obj => { obj.id == chapter.id })
  }

}
