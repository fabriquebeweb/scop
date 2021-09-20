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
import { AdminMembersComponent } from '@scop/web/admin/members/members.component'
import { AdminMembersService } from '@scop/web/admin/members/members.service';
import { AdminMembersFormComponent } from '@scop/web/admin/members/form/form.component'
import { AdminMembersDetailsComponent } from '@scop/web/admin/members/details/details.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


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
    MatProgressSpinnerModule,
    RouterModule.forChild([])
  ],
  providers: [
    AdminMembersService
  ]
})
export class AdminMembersModule {}
