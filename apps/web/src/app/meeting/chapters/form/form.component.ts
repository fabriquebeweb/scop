import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Answer, Chapter, Choice, User } from '@scop/interfaces'
import { Subscription } from 'rxjs'
import { MeetingService } from '../../meeting.service'


@Component({
  selector: 'chapter-form',
  templateUrl: './form.component.html'
})
export class MeetingFormComponent implements OnInit{

  //@Input() chapter!: Chapter
  chapter! : Chapter
  user! : User
  choice! : Choice
  radioForm: FormControl = new FormControl()
  observer!: Subscription

  constructor(
    private service: MeetingService,
    private readonly route: ActivatedRoute,
    // private fb: FormBuilder
  ) {}

  ngOnInit() : void
  {
    this.service.getMeetingChapter(5)
      .then((id)=> {
        this.chapter = id
      })
      .catch((id)=> console.log(id))
      
  }

  save() : void
  {
    let answer: Answer = {
      chapter : this.chapter.id,
      user : 7,
      choice : this.choice.id

    }
    this.service.addChapterChoice(answer)
      .then((choice)=> {
          console.log('Cette réponse est de loin la meilleure ' + choice)
      
  })
      .catch(console.log)
              
  }

  valueElement(choice: any) : void
  {
    this.choice = choice
  }


}
