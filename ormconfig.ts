import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Answer, Chapter, Choice, Document, Enterprise, Meeting, MeetingType, Participation, Provider, Question, Status, User } from '@scop/entities'

export const CONNECTION: TypeOrmModuleOptions = {
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
    Question,
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

export default CONNECTION
