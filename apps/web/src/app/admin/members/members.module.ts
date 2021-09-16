import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
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
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild([])
  ],
  providers: [
    AdminMembersService
  ]
})
export class AdminMembersModule {}
