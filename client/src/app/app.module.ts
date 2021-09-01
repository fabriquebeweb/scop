import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutesModule } from '@src/app/app.routes.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LolComponent } from '@src/app/lol/lol.component';
import { AdminMeetingsComponent } from '@src/app/admin-meetings/admin-meetings.component';
import { AdminMeetingsElementComponent } from '@src/app/admin-meetings/admin-meetings-element/admin-meetings-element.component';
import { AdminMeetingDetailComponent } from '@src/app/admin-meetings/admin-meeting-detail/admin-meeting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LolComponent,
    AdminMeetingsComponent,
    AdminMeetingsElementComponent,
    AdminMeetingDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
