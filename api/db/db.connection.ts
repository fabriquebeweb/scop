import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Enterprise } from "./entities/enterprise.entity"

export const connection: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'scop.db',
  entities: [
    Enterprise
  ],
  synchronize: true,
  autoLoadEntities: true,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations'
  }
}