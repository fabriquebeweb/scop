import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { QuestionAnswerDTO, Question } from '@scop/interfaces'
import { MeetingService } from '@scop/services'
import { InsertResult } from 'typeorm'

@Component({
  selector: 'dialog-form',
  templateUrl: './form.component.html'
})
export class MeetingDialogFormComponent implements OnInit {

  @Input() question!: Question
  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  answer!: QuestionAnswerDTO

  constructor(
    private service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getQuestion(this.question.id)
      .then(question => this.setQuestion(question))
      .catch(console.error)
  }

  setQuestion(question: Question) : void
  {
    this.question = question

    this.answer = {
      question : question.id,
      member : 1,
      choice : null
    }
  }

  saveAbstention() : void
  {
    this.answer.choice = null
    this.saveAnswer()
  }

  saveAnswer() : void
  {
    this.service.postAnswer(this.answer)
      .then(result => this.onSave(result))
      .catch(console.log)
  }

  onSave(result: InsertResult) : void
  {
    console.log(result)

    this.onClose()
  }

  onClose() : void
  {
    this.close.emit()
  }

}
