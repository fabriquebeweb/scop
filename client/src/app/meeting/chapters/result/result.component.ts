import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from 'src/app/misc/entities/Chapter'

@Component({
  selector: 'chapter-result',
  templateUrl: './result.component.html'
})
export class MeetingChaptersResultComponent implements OnInit {
  //Appel de l'entité Chapter
  @Input() chapter!: Chapter

  constructor() { }

  ngOnInit(): void {


  }

}
