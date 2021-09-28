import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { HomePage } from './home.page'

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([])
  ]
})
export class HomeModule {}
