import { Entity, BaseEntity, ManyToOne } from 'typeorm'
import { Chapter, Choice, User } from '@scop/entities'

@Entity()
export class Answer extends BaseEntity
{

  @ManyToOne(type => Chapter, chapter => chapter.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapter: Chapter

  @ManyToOne(type => User, user => user.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  user: User

  @ManyToOne(type => Choice, choice => choice.answers, { nullable: true, orphanedRowAction: 'nullify' })
  choice: Choice

}
