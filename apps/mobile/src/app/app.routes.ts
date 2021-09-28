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
    loadChildren: () => import('@scop/mobile/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'meeting',
    component: MeetingPage,
    loadChildren: () => import('@scop/mobile/meeting/meeting.module').then(m => m.MeetingModule)
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
