import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AdminMeetingsService } from '@scop/web/admin/meetings/meetings.service'
import { AdminMeetingsComponent } from '@scop/web/admin/meetings/meetings.component'
import { AdminMeetingsFormComponent } from '@scop/web/admin/meetings/form/form.component'
import { AdminMeetingSummaryComponent } from '@scop/web/admin/meetings/summary/summary.component'
import { AdminMeetingsDetailsComponent } from '@scop/web/admin/meetings/details/details.component'
import { AdminMeetingsChaptersComponent } from '@scop/web/admin/meetings/chapters/chapters.component'
import { AdminMeetingsChaptersFormComponent } from '@scop/web/admin/meetings/chapters/form/form.component'
import { AdminMeetingsChaptersDetailsComponent } from '@scop/web/admin/meetings/chapters/details/details.component'

@NgModule({
  declarations: [
    AdminMeetingsComponent,
    AdminMeetingsFormComponent,
    AdminMeetingSummaryComponent,
    AdminMeetingsDetailsComponent,
    AdminMeetingsChaptersComponent,
    AdminMeetingsChaptersFormComponent,
    AdminMeetingsChaptersDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([])
  ],
  providers: [
    AdminMeetingsService
  ]
})
export class AdminMeetingsModule {}
