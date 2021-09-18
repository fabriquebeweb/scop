import { ROUTES } from '@scop/web/app/app.routes'
import { LOCALE_ID, NgModule } from '@angular/core'
import { CommonModule, registerLocaleData } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from '@scop/web/app/app.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ErrorComponent } from './error/error.component'
import { AdminModule } from './admin/admin.module'
import { MeetingModule } from './meeting/meeting.module'
import { PWA } from '@scop/globals'
import FR from '@angular/common/locales/fr'
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
    AdminModule,
    MeetingModule,
    RouterModule.forRoot(ROUTES),
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
