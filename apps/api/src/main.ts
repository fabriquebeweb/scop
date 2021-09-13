import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  // const port = process.env.PORT || 3333
  await app.listen(process.env.PORT || 3333)
}

bootstrap()
