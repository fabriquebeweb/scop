import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router'
import { ErrorComponent } from '@scop/mobile/error/error.component'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from '@scop/mobile/app.component'
import { ROUTES } from '@scop/mobile/app.routes'
import { SocketIoModule } from 'ngx-socket-io'
import { NgModule } from '@angular/core'
import { SOCKET } from '@scop/globals'

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    SocketIoModule.forRoot(SOCKET),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
