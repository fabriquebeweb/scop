import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'chapter-details',
  templateUrl: './details.component.html',
})
export class MeetingChaptersDetailsComponent implements OnInit {

  chapter!: Chapter

  constructor(
    private readonly params: NavParams
  ){}

  ngOnInit() : void
  {
    this.chapter = this.params.get('chapter')
  }

}
