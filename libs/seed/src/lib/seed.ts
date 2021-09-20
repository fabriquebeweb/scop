import { SeedService } from './seed.service'
import { SeedModule } from './seed.module'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

NestFactory.createApplicationContext(SeedModule)
  .then(app => {
    const logger = app.get(Logger)
    app.get(SeedService).seed()
      .then(() => logger.log('SEEDING COMPLETE', SeedService.name))
      .catch(error => logger.error(error, SeedService.name))
      .finally(() => app.close())
  })
  .catch(error => { throw error })
