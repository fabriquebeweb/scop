import { Routes } from '@angular/router'
import { HomePage } from './home/home.page'

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('@scop/mobile/home/home.module').then(m => m.HomePageModule),
    component: HomePage,
    // children: [
    //   {
    //     path: '',
    //   }
    // ]
  }
]