import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ErrorComponent } from "./misc/error/error.component";
import { HomeComponent } from "./misc/home/home.component";
import { MeetingComponent } from "./meeting/meeting.component";
import { LoginComponent } from "./misc/login/login.component";
import { AdminMeetingsComponent } from "./admin/meetings/meetings.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'meetings',
        component: AdminMeetingsComponent,
      }
    ]
  },
  {
    path: 'meeting',
    component: MeetingComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]
