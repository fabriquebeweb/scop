import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { Chapter } from '@scop/interfaces'

@Component({
  selector: 'chapter-form',
  templateUrl: './form.component.html'
})
export class MeetingFormComponent implements OnInit {

  @Input() chapter!: Chapter
  radioForm: FormControl = new FormControl()
  choice: string = ''

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() : void
  {}

  save() : void
  {
    console.log(this.choice)
  }

  valueElement(choice: any) : void
  {
    this.choice = choice
  }

}
