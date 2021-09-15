import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class AdminMeetingsChaptersComponent implements OnInit {

  @Input() chapters!: Chapter[]
  @Output() update: EventEmitter<Chapter[]> = new EventEmitter<Chapter[]>()

  constructor(){}

  ngOnInit() : void
  {}

  onNewChapter(chapter: Chapter)
  {
    this.chapters.push(chapter)
    this.update.emit(this.chapters)
  }

  onChapterUpdate(chapter: Chapter)
  {
    this.chapters[this.index(chapter)] = chapter
    this.update.emit(this.chapters)
  }

  onChapterRemove(targetChapter: Chapter)
  {
    this.chapters = this.chapters.filter(chapter => chapter != targetChapter)
    this.update.emit(this.chapters)
  }

  index(chapter: Chapter) : number
  {
    return this.chapters.findIndex(obj => obj.id == chapter.id)
  }

}
