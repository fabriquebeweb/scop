import { Logger, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { connection } from '../db.connection'
import { SeedService } from './seed.service'

@Module({
  imports: [
    TypeOrmModule.forRoot(connection)
  ],
  providers: [SeedService, Logger]
})
export class SeedModule {}
