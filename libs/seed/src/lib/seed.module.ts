import { Logger, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CONNECTION } from '@scop/config/orm'
import { SeedService } from '@scop/seed'

@Module({
  imports: [
    TypeOrmModule.forRoot(CONNECTION)
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
