import { SwRegistrationOptions } from '@angular/service-worker'
import { environment } from '@scop/web/environments/environment'

export const PWA: SwRegistrationOptions = {

  enabled: environment.production,
  registrationStrategy: 'registerWhenStable:30000'

}
