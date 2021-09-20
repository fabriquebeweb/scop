import { Entity, BaseEntity, ManyToOne } from 'typeorm'
import { Chapter, Choice, Question, User } from '@scop/entities'

@Entity()
export class Answer extends BaseEntity
{

  @ManyToOne(type => Question, question => question.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  question: Question

  @ManyToOne(type => User, user => user.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  user: User

  @ManyToOne(type => Choice, choice => choice.answers, { nullable: true, orphanedRowAction: 'nullify' })
  choice: Choice

}
