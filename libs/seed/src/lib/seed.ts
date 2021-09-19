import { Logger } from '@nestjs/common'
import { SeedModule } from '@scop/seed'
import { SeedService } from '@scop/seed'
import { NestFactory } from '@nestjs/core'

NestFactory.createApplicationContext(SeedModule)
  .then(app => {
    const logger = app.get(Logger)
    app.get(SeedService)
      .seed()
      .then(() => logger.log('SEEDING COMPLETE', SeedService.name))
      .catch(error => logger.error(error, SeedService.name))
      .finally(() => app.close())
  })
  .catch(error => { throw error })
