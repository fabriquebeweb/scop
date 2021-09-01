import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutesModule } from '@src/app/app.routes.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LolComponent } from '@src/app/lol/lol.component';
import { AdminComponent } from '@src/app/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LolComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
