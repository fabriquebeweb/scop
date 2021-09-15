import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'dialog-result',
  templateUrl: './result.component.html'
})
export class MeetingDialogResultComponent implements OnInit {

  @Input() chapter!: Chapter

  constructor(){}

  ngOnInit() : void
  {}

}
