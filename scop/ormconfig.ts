import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AnswerEntity, ChapterEntity, ChoiceEntity, DocumentEntity, EnterpriseEntity, MeetingEntity, MeetingTypeEntity, ParticipationEntity, ProviderEntity, StatusEntity, UserEntity } from '@scop/entities'

const connection: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [
    AnswerEntity,
    ChapterEntity,
    ChoiceEntity,
    DocumentEntity,
    EnterpriseEntity,
    MeetingEntity,
    MeetingTypeEntity,
    ParticipationEntity,
    ProviderEntity,
    StatusEntity,
    UserEntity
  ],
  synchronize: true,
  autoLoadEntities: true,
  cli: {
    entitiesDir: 'libs/entities/src/lib',
    migrationsDir: 'libs/migrations/src/lib'
  }
}

export default connection
export { connection }
