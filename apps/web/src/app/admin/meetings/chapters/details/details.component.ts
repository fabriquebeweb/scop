import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsChaptersDetailsComponent implements OnInit {

  @Input() chapter!: Chapter

  constructor() {}

  ngOnInit() : void
  {}

}
