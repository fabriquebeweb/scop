import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { AdminMeetingsService } from './meetings.service'
import { AdminMeetingsComponent } from './meetings.component'
import { AdminMeetingsFormComponent } from './form/form.component'
import { AdminMeetingsDetailsComponent } from './details/details.component'
import { AdminMeetingsChaptersComponent } from './chapters/chapters.component'
import { AdminMeetingsChaptersDetailsComponent } from './chapters/details/details.component'
import { AdminMeetingsChaptersFormComponent } from './chapters/form/form.component'
import { AdminMeetingSummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AdminMeetingsComponent,
    AdminMeetingsFormComponent,
    AdminMeetingSummaryComponent,
    AdminMeetingsDetailsComponent,
    AdminMeetingsChaptersComponent,
    AdminMeetingsChaptersDetailsComponent,
    AdminMeetingsChaptersFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    RouterModule.forChild([])
  ],
  providers: [
    AdminMeetingsService
  ]
})
export class AdminMeetingsModule {}
