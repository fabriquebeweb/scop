import { AppModule } from '@scop/api/app.module'
import { NestFactory } from '@nestjs/core'
import { API } from '@scop/globals'
import 'reflect-metadata'

async function bootstrap()
{
  (await NestFactory.create(AppModule, { cors: true }))
    .setGlobalPrefix(API.PREFIX)
    .listen(API.PORT)
}

bootstrap()
