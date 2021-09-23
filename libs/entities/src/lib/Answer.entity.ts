import { Entity, BaseEntity, ManyToOne } from 'typeorm'
import { Chapter, Choice, Question, Member } from '@scop/entities'

@Entity()
export class Answer extends BaseEntity
{

  @ManyToOne(type => Question, question => question.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  question: Question

  @ManyToOne(type => Member, member => member.answers, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  member: Member

  @ManyToOne(type => Choice, choice => choice.answers, { nullable: true, orphanedRowAction: 'nullify' })
  choice: Choice

}
