import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MeetingChaptersDetailsComponent } from './chapters/details/details.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { MeetingService } from './meeting.service'
import { MeetingLobbyComponent } from './lobby/lobby.component'
import { MeetingDialogComponent } from './dialog/dialog.component'
import { MeetingDialogResultComponent } from './dialog/result/result.component'
import { MeetingDialogFormComponent } from './dialog/form/form.component'

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingChaptersDetailsComponent,
    MeetingPresenceComponent,
    MeetingDialogComponent,
    MeetingDialogResultComponent,
    MeetingDialogFormComponent,
    MeetingLobbyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    RouterModule.forChild([])
  ],
  providers: [
    MeetingService
  ],
  entryComponents: [
    MeetingDialogComponent
  ]
})
export class MeetingModule {}
