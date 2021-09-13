import { Logger, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { connection } from '@scop/database'
import { SeedService } from './seed.service'

@Module({
  imports: [
    TypeOrmModule.forRoot(connection)
  ],
  providers: [
    SeedService,
    Logger
  ],
  exports: [
    SeedService
  ]
})
export class SeedModule {}
