import { Routes } from '@angular/router'
import { AdminComponent } from './admin/admin.component'
import { ErrorComponent } from './error/error.component'
import { HomeComponent } from './home/home.component'
import { MeetingComponent } from './meeting/meeting.component'
import { LoginComponent } from './login/login.component'
import { AdminMeetingsComponent } from './admin/meetings/meetings.component'
import { AdminStatusComponent } from './admin/status/status.component'
import { AdminMembersComponent } from './admin/members/members.component'
import { AdminThemeComponent } from './admin/theme/theme.component'
import { MeetingDocumentsComponent } from './meeting/documents/documents.component'
import { MeetingChaptersComponent } from './meeting/chapters/chapters.component'
import { MeetingPresenceComponent } from './meeting/presence/presence.component'
import { AdminMeetingsDetailsComponent } from './admin/meetings/details/details.component'
import { AdminMeetingsFormComponent } from './admin/meetings/form/form.component'
import { MeetingChaptersDetailsComponent } from './meeting/chapters/details/details.component'

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
        children: [
          {
            path: 'new',
            component: AdminMeetingsFormComponent
          },
          {
            path: ':meeting',
            component: AdminMeetingsDetailsComponent
          }
        ]
      },
      {
        path: 'members',
        component: AdminMembersComponent
      },
      {
        path: 'status',
        component: AdminStatusComponent
      },
      {
        path: 'theme',
        component: AdminThemeComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  },
  {
    path: 'meeting',
    component: MeetingComponent,
    children: [
      {
        path: 'documents',
        component: MeetingDocumentsComponent
      },
      {
        path: 'chapters',
        component: MeetingChaptersComponent,
        children: [
          {
            path: ':chapter',
            component: MeetingChaptersDetailsComponent
          }
        ]
      },
      {
        path: 'presence',
        component: MeetingPresenceComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]
