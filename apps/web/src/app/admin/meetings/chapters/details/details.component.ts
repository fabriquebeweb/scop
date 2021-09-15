import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsChaptersDetailsComponent implements OnInit {

  @Input() chapter!: Chapter
  @Output() update: EventEmitter<Chapter> = new EventEmitter<Chapter>()
  @Output() remove: EventEmitter<Chapter> = new EventEmitter<Chapter>()

  constructor(){}

  ngOnInit() : void
  {}

  chapterUpdate()
  {
    this.update.emit(this.chapter)
  }

  chapterRemove()
  {
    this.remove.emit(this.chapter)
  }

}
