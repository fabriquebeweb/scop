import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT || 3000)
}

bootstrap()
