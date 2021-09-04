import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from '@src/app/app.component'
import { AdminModule } from '@src/app/admin/admin.module'
import { MeetingModule } from '@src/app/meeting/meeting.module'
import { ErrorComponent } from '@src/app/error/error.component'
import { LoginComponent } from '@src/app/login/login.component'
import { HomeComponent } from './home/home.component'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdminModule,
    MeetingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
