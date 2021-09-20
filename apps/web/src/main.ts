import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from '@scop/web/app.module'
import { environment } from '@scop/environment'
import { enableProdMode } from '@angular/core'

if (environment.production) { enableProdMode() }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(console.error)
