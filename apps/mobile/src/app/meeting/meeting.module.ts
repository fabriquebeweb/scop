import { MeetingChaptersDetailsComponent } from '@scop/mobile/meeting/chapters/details/details.component'
import { MeetingDocumentsComponent } from '@scop/mobile/meeting/documents/documents.component'
import { MeetingChaptersComponent } from '@scop/mobile/meeting/chapters/chapters.component'
import { MeetingPresenceComponent } from '@scop/mobile/meeting/presence/presence.component'
import { MeetingPage } from '@scop/mobile/meeting/meeting.page'
import { ROUTES } from '@scop/mobile/meeting/meeting.routes'
import { MeetingService } from '@scop/services'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [
    MeetingPage,
    MeetingChaptersComponent,
    MeetingDocumentsComponent,
    MeetingPresenceComponent,
    MeetingChaptersDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [
    MeetingService
  ]
})
export class MeetingModule {}
