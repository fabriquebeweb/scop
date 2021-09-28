import { MeetingDocumentsComponent } from '@scop/mobile/meeting/documents/documents.component'
import { MeetingChaptersComponent } from '@scop/mobile/meeting/chapters/chapters.component'
import { MeetingPresenceComponent } from '@scop/mobile/meeting/presence/presence.component'
import { ErrorComponent } from '@scop/mobile/error/error.component'
import { Routes } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/meeting/chapters'
  },
  {
    path: 'chapters',
    component: MeetingChaptersComponent
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
