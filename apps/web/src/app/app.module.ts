import FR from '@angular/common/locales/fr'
import { SocketIoModule } from 'ngx-socket-io'
import { RouterModule } from '@angular/router'
import { LOCALE_ID, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { CommonModule, registerLocaleData } from '@angular/common'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PWA, SOCKET } from '@scop/globals'
import { ROUTES } from '@scop/web/app.routes'
import { AppComponent } from '@scop/web/app.component'
import { AdminModule } from '@scop/web/admin/admin.module'
import { HomeComponent } from '@scop/web/home/home.component'
import { LoginComponent } from '@scop/web/login/login.component'
import { ErrorComponent } from '@scop/web/error/error.component'
import { MeetingModule } from '@scop/web/meeting/meeting.module'
registerLocaleData(FR)

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
    HttpClientModule,
    MatProgressSpinnerModule,
    AdminModule,
    MeetingModule,
    RouterModule.forRoot(ROUTES),
    SocketIoModule.forRoot(SOCKET),
    ServiceWorkerModule.register('ngsw-worker.js', PWA)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
