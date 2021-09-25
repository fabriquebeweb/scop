import { Component, Input, OnInit } from '@angular/core'
import { NewQuestionDTO, Question } from '@scop/interfaces'

@Component({
  selector: 'chapter-question',
  templateUrl: './question.component.html'
})
export class MeetingChaptersQuestionComponent implements OnInit {

  @Input() question!: Question | NewQuestionDTO

  constructor(){}

  ngOnInit() : void
  {}

}
