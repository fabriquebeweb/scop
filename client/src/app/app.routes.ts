import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LolComponent } from "./lol/lol.component";
import { LobbyComponent } from "./meeting/lobby/lobby.component";
import { MeetingComponent } from "./meeting/meeting.component";

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
    path: 'meeting',
    component: MeetingComponent
  },
  {
    path: 'meeting/lobby',
    component: LobbyComponent
  },
]