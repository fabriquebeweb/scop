import { Routes } from "@angular/router";
import { AdminMeetingsComponent } from "./admin-meetings/admin-meetings.component";

import { HomeComponent } from "./home/home.component";
import { LolComponent } from "./lol/lol.component";

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
    path: 'meetings',
    component: AdminMeetingsComponent
  },
]