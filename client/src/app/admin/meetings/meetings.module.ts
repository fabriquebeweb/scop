import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AdminMeetingsService } from './meetings.service'
import { AdminMeetingsFormComponent } from './form/form.component'
import { AdminMeetingsDetailsComponent } from './details/details.component'
import { AdminMeetingsChaptersComponent } from './chapters/chapters.component'
import { AdminMeetingsChaptersDetailsComponent } from './chapters/details/details.component'
import { AdminMeetingsChaptersFormComponent } from './chapters/form/form.component'
import { AdminMeetingSummaryComponent } from './summary/summary.component'
import { AdminMeetingsComponent } from './meetings.component'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AdminMeetingsComponent,
    AdminMeetingsFormComponent,
    AdminMeetingSummaryComponent,
    AdminMeetingsDetailsComponent,
    AdminMeetingsChaptersComponent,
    AdminMeetingsChaptersDetailsComponent,
    AdminMeetingsChaptersFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule.forChild([])
  ],
  providers: [
    AdminMeetingsService
  ]
})
export class AdminMeetingsModule { }
