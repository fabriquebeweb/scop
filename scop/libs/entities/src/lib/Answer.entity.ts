import { Entity, BaseEntity, ManyToOne } from 'typeorm'
import { ChapterEntity, ChoiceEntity, UserEntity } from '@scop/entities'

@Entity()
export class AnswerEntity extends BaseEntity
{

  @ManyToOne(type => ChapterEntity, chapter => chapter.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapter: ChapterEntity

  @ManyToOne(type => UserEntity, user => user.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  user: UserEntity

  @ManyToOne(type => ChoiceEntity, choice => choice.answers, { nullable: true, orphanedRowAction: 'nullify' })
  choice: ChoiceEntity

}
