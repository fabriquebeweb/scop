import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MeetingService } from '@scop/web/meeting/meeting.service'
import { MeetingComponent } from '@scop/web/meeting/meeting.component'
import { MeetingLobbyComponent } from '@scop/web/meeting/lobby/lobby.component'
import { MeetingDialogComponent } from '@scop/web/meeting/dialog/dialog.component'
import { MeetingChaptersComponent } from '@scop/web/meeting/chapters/chapters.component'
import { MeetingPresenceComponent } from '@scop/web/meeting/presence/presence.component'
import { MeetingDialogFormComponent } from '@scop/web/meeting/dialog/form/form.component'
import { MeetingDocumentsComponent } from '@scop/web/meeting/documents/documents.component'
import { MeetingDialogResultComponent } from '@scop/web/meeting/dialog/result/result.component'
import { MeetingChaptersResultComponent } from '@scop/web/meeting/chapters/result/result.component'
import { MeetingChaptersDetailsComponent } from '@scop/web/meeting/chapters/details/details.component'

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingChaptersDetailsComponent,
    MeetingChaptersResultComponent,
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
    MatProgressSpinnerModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
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
