import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from '@src/environments/environment'
import { AppComponent } from '@src/app/app.component'
import { HomeComponent } from '@src/app/home/home.component'
import { LoginComponent } from '@src/app/login/login.component'
import { ErrorComponent } from '@src/app/error/error.component'
import { AdminModule } from '@src/app/admin/admin.module'
import { MeetingModule } from '@src/app/meeting/meeting.module'
import { routes } from '@src/app/app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AdminModule,
    MeetingModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
