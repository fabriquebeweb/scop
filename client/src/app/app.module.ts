import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutesModule } from '@src/app/app.routes.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LolComponent } from '@src/app/lol/lol.component';
import { ChaptersComponent } from '@src/app/template/chapters/chapters.component';
import { QuestionComponent } from '@src/app/template/question/question.component';
import { TemplateComponent } from '@src/app/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LolComponent,
    ChaptersComponent,
    QuestionComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
