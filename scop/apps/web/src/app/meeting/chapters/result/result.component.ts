import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from '../../../misc/entities/Chapter'

@Component({
  selector: 'chapter-result',
  templateUrl: './result.component.html'
})
export class MeetingChaptersResultComponent implements OnInit {
  
  @Input() chapter!: Chapter

  constructor() { }

  ngOnInit() : void
  {}

}
