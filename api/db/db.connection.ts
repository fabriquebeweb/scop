import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Enterprise } from './entities/Enterprise.entity';

export const connection: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'scop.db',
  entities: [Enterprise],
  synchronize: true,
  autoLoadEntities: true,
  cli: {
    entitiesDir: 'db/entities',
    migrationsDir: 'db/migrations',
  },
};
