import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
@Input() chapterId = '';
@Input() chapterDesc = '';
@Input() chapterQuest = '';

  constructor() { }

  ngOnInit(): void {
  }

}
