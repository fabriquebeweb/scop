import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app.routing.tns';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/misc/home/home.component';
import { MeetingModule } from '@src/app/meeting/meeting.module.tns';
import { AdminModule } from '@src/app/admin/admin.module.tns';
import { ErrorComponent } from '@src/app/misc/error/error.component';
import { LoginComponent } from '@src/app/misc/login/login.component';

// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

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
    AdminModule,
    MeetingModule,
    AppRoutingModule
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
