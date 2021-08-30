import { Entity, PrimaryColumn, BaseEntity, OneToOne } from "typeorm"
import { Question } from "./Question.entity"

@Entity()
export class Answer extends BaseEntity {
  @OneToOne(type => Question)
  @PrimaryColumn()
  question:Question

  @OneToOne(type => User)
  @PrimaryColumn()
  user:User 

  @OneToOne(type => Choice)
  @PrimaryColumn({ nullable: true })
  choice:Choice 

}