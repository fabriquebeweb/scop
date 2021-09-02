import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class AdminMeetingChaptersComponent implements OnInit {
  @Input() chapterId = '';
  @Input() chapterDesc = '';
  @Input() chapterQuest = '';

  constructor() { }

  ngOnInit(): void {
  }

}
