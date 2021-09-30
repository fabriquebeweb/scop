import { MeetingChaptersDetailsComponent } from '@scop/mobile/meeting/chapters/details/details.component'
import { MeetingDialogResultComponent } from '@scop/mobile/meeting/dialog/result/result.component'
import { MeetingDocumentsComponent } from '@scop/mobile/meeting/documents/documents.component'
import { MeetingDialogFormComponent } from '@scop/mobile/meeting/dialog/form/form.component'
import { MeetingChaptersComponent } from '@scop/mobile/meeting/chapters/chapters.component'
import { MeetingPresenceComponent } from '@scop/mobile/meeting/presence/presence.component'
import { MeetingDialogComponent } from '@scop/mobile/meeting/dialog/dialog.component'
import { MeetingPage } from '@scop/mobile/meeting/meeting.page'
import { MeetingService } from '@scop/services'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [
    MeetingPage,
    MeetingDialogComponent,
    MeetingDialogFormComponent,
    MeetingDialogResultComponent,
    MeetingChaptersComponent,
    MeetingDocumentsComponent,
    MeetingPresenceComponent,
    MeetingChaptersDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([]),
    // RouterModule.forChild(ROUTES),
  ],
  providers: [
    MeetingService
  ]
})
export class MeetingModule {}
