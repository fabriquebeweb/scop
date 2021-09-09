import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { SeedModule } from "./seed.module"
import { SeedService } from "./seed.service"

NestFactory.createApplicationContext(SeedModule)
  .then(app => {
    const logger = app.get(Logger)
    app.get(SeedService)
      .seed()
      .then(() => {
        logger.log('SEEDING COMPLETE')
      })
      .catch(error => {
        logger.error('SEEDING FAILED')
        throw error
      })
      .finally(() => app.close())
  })
  .catch(error => {
    throw error
  })
