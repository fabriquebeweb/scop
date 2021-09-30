import { MeetingChaptersDetailsComponent } from '@scop/mobile/meeting/chapters/details/details.component'
import { MeetingDocumentsComponent } from '@scop/mobile/meeting/documents/documents.component'
import { MeetingChaptersComponent } from '@scop/mobile/meeting/chapters/chapters.component'
import { MeetingPresenceComponent } from '@scop/mobile/meeting/presence/presence.component'
import { ErrorComponent } from '@scop/mobile/error/error.component'
import { MeetingPage } from '@scop/mobile/meeting/meeting.page'
import { HomePage } from '@scop/mobile/home/home.page'
import { Routes } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomePage,
    // loadChildren: () => import('@scop/mobile/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'meeting',
    component: MeetingPage,
    // loadChildren: () => import('@scop/mobile/meeting/meeting.module').then(m => m.MeetingModule),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/meeting/chapters'
      },
      {
        path: 'chapters',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: MeetingChaptersComponent
          },
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
        path: 'documents',
        component: MeetingDocumentsComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '**',
        redirectTo: '/meeting/error'
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/error'
  }
]
