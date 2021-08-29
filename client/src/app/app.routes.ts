import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LolComponent } from "./lol/lol.component";

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'lol',
      component: LolComponent
    },
  ]
  