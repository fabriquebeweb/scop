import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router'
import { ErrorComponent } from '@scop/mobile/error/error.component'
import { MeetingModule } from '@scop/mobile/meeting/meeting.module'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { HomeModule } from '@scop/mobile/home/home.module'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from '@scop/mobile/app.component'
import { HttpClientModule } from '@angular/common/http'
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
    HomeModule,
    MeetingModule,
    IonicModule.forRoot(),
    SocketIoModule.forRoot(SOCKET),
    // RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
