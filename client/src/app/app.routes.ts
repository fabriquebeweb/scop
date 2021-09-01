import { Routes } from "@angular/router";
import { ChaptersComponent } from "./template/chapters/chapters.component";
import { QuestionComponent } from "./template/question/question.component";

import { HomeComponent } from "./home/home.component";
import { LolComponent } from "./lol/lol.component";
import { TemplateComponent } from "./template/template.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lol',
    component: LolComponent
  },
  {
    path: 'chapters',
    component: ChaptersComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  }
]