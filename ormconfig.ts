import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Answer, Chapter, Choice, Document, Enterprise, Meeting, MeetingType, Participation, Provider, Status, User } from '@scop/entities'

export const connection: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [
    Answer,
    Chapter,
    Choice,
    Document,
    Enterprise,
    Meeting,
    MeetingType,
    Participation,
    Provider,
    Status,
    User
  ],
  synchronize: true,
  autoLoadEntities: true,
  cli: {
    entitiesDir: 'libs/entities/src/lib',
    migrationsDir: 'libs/migrations/src/lib',
    subscribersDir: 'libs/subscribers/src/lib'
  }
}

export default connection