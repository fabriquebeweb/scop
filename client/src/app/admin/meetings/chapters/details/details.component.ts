import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/misc/entities/Chapter';

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsChaptersDetailsComponent implements OnInit {
  @Input() chapter!: Chapter

  constructor() { }

  ngOnInit(): void {
  }

}
