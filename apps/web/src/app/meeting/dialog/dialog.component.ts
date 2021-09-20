import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question, MeetingDialogDTO } from '@scop/interfaces';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'meeting-dialog',
  templateUrl: './dialog.component.html',
})
export class MeetingDialogComponent implements OnInit {

  question!: Question

  constructor(
    private readonly ref: MatDialogRef<MeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MeetingDialogDTO,
    private readonly service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getQuestion(this.data.question)
      .then(question => this.setQuestion(question))
      .catch(console.log)
  }

  setQuestion(question: Question) : void
  {
    this.question = question
  }

  onClose() : void
  {
    this.ref.close()
  }

}
