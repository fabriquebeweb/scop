import { Component, Input, OnInit } from '@angular/core'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'dialog-form',
  templateUrl: './form.component.html'
})
export class MeetingDialogFormComponent implements OnInit {

  @Input() chapter!: Chapter

  constructor(){}

  ngOnInit() : void
  {}

  save() : void
  {}

  valueElement(choice: any) : void
  {}

}
