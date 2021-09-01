import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutesModule } from '@src/app/app.routes.module.tns';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LolComponent } from '@src/app/lol/lol.component';
import { AdminMeetingsComponent } from '@src/app/admin-meetings/admin-meetings.component';
import { AdminMeetingsElementComponent } from '@src/app/admin-meetings/admin-meetings-element/admin-meetings-element.component';
import { AdminMeetingDetailComponent } from '@src/app/admin-meetings/admin-meeting-detail/admin-meeting-detail.component';

// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LolComponent,
    AdminMeetingsComponent,
    AdminMeetingsElementComponent,
    AdminMeetingDetailComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
