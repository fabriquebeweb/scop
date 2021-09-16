import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { AdminMembersComponent } from './members.component'
import { AdminMembersService } from './members.service';
import { AdminMembersFormComponent } from './form/form.component'
import { AdminMembersDetailsComponent } from './details/details.component'

@NgModule({
  declarations: [
    AdminMembersComponent,
    AdminMembersFormComponent,
    AdminMembersDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([])
  ],
  providers: [
    AdminMembersService
  ]
})
export class AdminMembersModule {}
