import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptModule, NativeScriptRouterModule } from '@nativescript/angular'
import { AppComponent } from '@src/app/app.component'
import { HomeComponent } from '@src/app/home/home.component'
import { MeetingModule } from '@src/app/meeting/meeting.module.tns'
import { ErrorComponent } from '@src/app/error/error.component'
import { LoginComponent } from '@src/app/login/login.component'
import { routes } from './app.routes';

// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    MeetingModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
