import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminMembersComponent } from './members.component'
import { AdminMembersService } from './members.service'

@NgModule({
  declarations: [
    AdminMembersComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AdminMembersService
  ]
})
export class AdminMembersModule {}
