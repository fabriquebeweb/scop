import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'meeting-question',
  templateUrl: './question.component.html'
})
export class AdminMeetingQuestionComponent implements OnInit {
  @Input() showQuestion: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
