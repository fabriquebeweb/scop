import { AppModule } from '@scop/api/app.module'
import { NestFactory } from '@nestjs/core'
import { API } from '@scop/globals'
import 'reflect-metadata'
import 'dotenv'

async function bootstrap()
{
  (await NestFactory.create(AppModule, API.CORS))
    .setGlobalPrefix(API.PREFIX)
    .listen(API.PORT)
}

bootstrap()
