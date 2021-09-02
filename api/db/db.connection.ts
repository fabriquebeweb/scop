import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Answer } from './entities/Answer.entity'
import { Chapter } from './entities/Chapter.entity'
import { Choice } from './entities/Choice.entity'
import { Document } from './entities/Document.entity'
import { Enterprise } from './entities/Enterprise.entity'
import { Meeting } from './entities/Meeting.entity'
import { MeetingType } from './entities/MeetingType.entity'
import { Participation } from './entities/Participation.entity'
import { Provider } from './entities/Provider.entity'
import { Status } from './entities/Status.entity'
import { User } from './entities/User.entity'

export const connection: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db/db.sqlite',
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
  autoLoadEntities: true
}
