import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminMeetingsFormComponent } from './form/form.component'
import { AdminMeetingsDetailsComponent } from './details/details.component'
import { AdminMeetingsChaptersComponent } from './chapters/chapters.component'
import { AdminMeetingsChaptersDetailsComponent } from './chapters/details/details.component'
import { AdminMeetingsChaptersFormComponent } from './chapters/form/form.component'
import { AdminMeetingSummaryComponent } from './summary/summary.component'
import { AdminMeetingsComponent } from './meetings.component'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
// import { AccordionModule } from 'primeng/accordion'

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
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule.forChild([])
  ]
})
export class AdminMeetingsModule { }
