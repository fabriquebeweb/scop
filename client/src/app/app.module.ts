import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@src/app/app.component';
import { AdminModule } from '@src/app/admin/admin.module';
import { MeetingModule } from '@src/app/meeting/meeting.module';
import { ErrorComponent } from '@src/app/misc/error/error.component';
import { LoginComponent } from '@src/app/misc/login/login.component';
import { HomeComponent } from './misc/home/home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@src/app/app.routing';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
