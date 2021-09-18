import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { API } from '@scop/globals'
import 'reflect-metadata'

async function bootstrap()
{
  (await NestFactory.create(AppModule, { cors: true }))
    .setGlobalPrefix(API.PREFIX)
    .listen(API.PORT)
}

bootstrap()
