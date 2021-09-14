import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingComponent } from './meeting.component'
import { MeetingDocumentsComponent } from './documents/documents.component'
import { MeetingChaptersComponent } from './chapters/chapters.component'
import { MeetingPresenceComponent } from './presence/presence.component'
import { MeetingChaptersResultComponent } from './chapters/result/result.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MeetingChaptersDetailsComponent } from './chapters/details/details.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MeetingFormComponent } from './chapters/form/form.component'
import { MatRadioModule } from '@angular/material/radio'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MeetingService } from './meeting.service';
import { MeetingLobbyComponent } from './lobby/lobby.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDocumentsComponent,
    MeetingChaptersComponent,
    MeetingChaptersResultComponent,
    MeetingChaptersDetailsComponent,
    MeetingPresenceComponent,
    MeetingFormComponent,
    MeetingLobbyComponent,
    DialogComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  ]
})
export class MeetingModule {}
