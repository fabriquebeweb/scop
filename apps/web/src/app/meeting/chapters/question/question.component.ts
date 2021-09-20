import { Component, Input, OnInit } from '@angular/core'
import { Question } from '@scop/interfaces'

@Component({
  selector: 'chapter-question',
  templateUrl: './question.component.html'
})
export class MeetingQuestionComponent implements OnInit {

  @Input() question!: Question

  constructor(){}

  ngOnInit() : void
  {}

}
