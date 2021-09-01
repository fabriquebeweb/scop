import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

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
    path: 'admin',
    component: AdminComponent
  }
]
