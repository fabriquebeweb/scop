import { Routes } from "@angular/router"
import { AdminComponent } from "./admin/admin.component"
import { ErrorComponent } from "./error/error.component"
import { HomeComponent } from "./home/home.component"
import { MeetingComponent } from "./meeting/meeting.component"
import { LoginComponent } from "./login/login.component"
import { AdminMeetingsComponent } from "./admin/meetings/meetings.component"

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
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/meetings'
      },
      {
        path: 'meetings',
        component: AdminMeetingsComponent,
      }
    ]
  },
  {
    path: 'meeting',
    component: MeetingComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/meeting/chapters'
      // }
    ]
  },
  {
    path: '**',
    component: ErrorComponent
  }
]
