import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { Question, QuestionResultDTO } from '@scop/interfaces'
import { MeetingService } from '@scop/services'

@Component({
  selector: 'dialog-result',
  templateUrl: './result.component.html'
})
export class MeetingDialogResultComponent implements OnInit {

  @Input() question!: Question
  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  questionResult!: QuestionResultDTO

  constructor(
    public readonly loading: LoadingController,
    private readonly service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getQuestionResult(this.question.id)
      .then(result => this.setChapterResult(result))
      .catch(console.log)
  }

  setChapterResult(result: QuestionResultDTO) : void
  {
    this.questionResult = result
  }

  onClose() : void
  {
    this.close.emit()
  }

}
