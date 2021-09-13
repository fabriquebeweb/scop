import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Meeting } from 'src/app/misc/entities/Meeting'
import { MeetingType } from 'src/app/misc/entities/MeetingType'
import { AdminMeetingsService } from '../meetings.service'

@Component({
  selector: 'meeting-form',
  templateUrl: './form.component.html'
})
export class AdminMeetingsFormComponent implements OnInit {

  // form!: FormGroup

  meeting: Meeting = {
    id: 1,
    date: new Date(),
    meetingType: {
      id: 2,
      title: "Fantastic Fresh Shoes"
    }
  }

  constructor(
    public readonly service: AdminMeetingsService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    // this.form = new FormGroup({
    //   name: new FormControl(null),
    //   lol: new FormControl(null),
    //   datte: new FormControl(null)
    // })
  }

  onSubmit() : void
  {
    // console.log(this.form.value)
    // console.log(new Date(this.form.value.datte))
  }

  log()
  {
    console.log(this.meeting)
  }

}
