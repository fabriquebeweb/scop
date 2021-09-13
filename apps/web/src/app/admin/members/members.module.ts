import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminMembersComponent } from './members.component'
import { AdminMembersService } from './members.service'
// import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AdminMembersComponent
  ],
  imports: [
    CommonModule,
    // MatIconModule
  ],
  providers: [
    AdminMembersService
  ]
})
export class AdminMembersModule {}
