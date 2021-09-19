import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { AdminMembersService } from '@scop/web/admin/members/members.service'
import { AdminMembersComponent } from '@scop/web/admin/members/members.component'
import { AdminMembersFormComponent } from '@scop/web/admin/members/form/form.component'
import { AdminMembersDetailsComponent } from '@scop/web/admin/members/details/details.component'

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
