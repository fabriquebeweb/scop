import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { AdminMembersComponent } from './members.component'
import { AdminMembersService } from './members.service'

@NgModule({
  declarations: [
    AdminMembersComponent
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
