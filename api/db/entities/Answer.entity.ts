import { Entity, PrimaryColumn, BaseEntity, OneToOne, ManyToOne } from "typeorm"
import { Choice } from "./Choice.entity"
import { Question } from "./Question.entity"
import { User } from "./User.entity"

@Entity()
export class Answer extends BaseEntity
{

  @ManyToOne(type => Question, question => question.answers)
  @PrimaryColumn()
  question: Question

  @ManyToOne(type => User, user => user.answers)
  @PrimaryColumn()
  user: User

  @ManyToOne(type => Choice, choice => choice.answers, { nullable: true })
  choice: Choice

}