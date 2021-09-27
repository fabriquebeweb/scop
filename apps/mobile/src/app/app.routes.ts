import { MeetingPage } from '@scop/mobile/meeting/meeting.page'
import { ErrorPage } from '@scop/mobile/error/error.page'
import { HomePage } from '@scop/mobile/home/home.page'
import { Routes } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage
  },
  {
    path: 'meeting',
    component: MeetingPage,
    loadChildren: () => import('@scop/mobile/meeting/meeting.module').then(m => m.MeetingModule)
  },
  {
    path: 'error',
    component: ErrorPage
  },
  {
    path: '**',
    redirectTo: '/error'
  }
]