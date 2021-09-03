import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from '@src/app/misc/entities/Chapter';

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class AdminMeetingChaptersComponent implements OnInit {
  @Input() chapter: Chapter

  constructor() { }

  ngOnInit(): void {
  }

}
