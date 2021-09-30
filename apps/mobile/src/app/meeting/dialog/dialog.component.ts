import { LoadingController, ModalController } from '@ionic/angular'
import { Question, MeetingDialogDTO } from '@scop/interfaces'
import { Component, Input, OnInit } from '@angular/core'
import { MeetingService } from '@scop/services'

@Component({
  selector: 'meeting-dialog',
  templateUrl: './dialog.component.html',
})
export class MeetingDialogComponent implements OnInit {

  @Input() payload!: MeetingDialogDTO
  question!: Question

  constructor(
    private readonly service: MeetingService,
    public loading: LoadingController,
    public dialog: ModalController
  ){}

  ngOnInit() : void
  {
    this.presentLoading()

    this.service.getQuestion(this.payload.question)
      .then(question => this.setQuestion(question))
      .catch(console.log)
  }

  setQuestion(question: Question) : void
  {
    this.question = question
  }

  async presentLoading() : Promise<void>
  {
    return await ( await this.loading.create() ).present()
  }

}
