import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from '@src/app/misc/entities/Chapter';

@Component({
  selector: 'meeting-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class AdminMeetingChapterComponent implements OnInit {
  @Input() chapter: Chapter

  constructor() { }

  ngOnInit(): void {
  }

}
