import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from '@scop/mobile/app.component'
import { ROUTES } from '@scop/mobile/app.routes'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
