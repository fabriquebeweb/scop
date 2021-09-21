import { HydrateService } from './hydrate.service'
import { HydrateModule } from './hydrate.module'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

NestFactory.createApplicationContext(HydrateModule)
  .then(app => {
    const logger = app.get(Logger)
    app.get(HydrateService).hydrate()
      .then(() => logger.log('HYDRATATION COMPLETE', HydrateService.name))
      .catch(error => logger.error(error, HydrateService.name))
      .finally(() => app.close())
  })
  .catch(error => { throw error })
