import { MeetingPage } from '@scop/mobile/meeting/meeting.page'
import { ROUTES } from '@scop/mobile/meeting/meeting.routes'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [
    MeetingPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class MeetingModule {}
