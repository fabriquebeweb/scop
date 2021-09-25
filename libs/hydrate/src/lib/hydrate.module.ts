import { Logger, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HydrateService } from '@scop/hydrate'
import { CONNECTION } from '@scop/config/orm'

@Module({
  imports: [
    TypeOrmModule.forRoot(CONNECTION)
  ],
  providers: [
    HydrateService,
    Logger
  ],
  exports: [
    HydrateService
  ]
})
export class HydrateModule {}
