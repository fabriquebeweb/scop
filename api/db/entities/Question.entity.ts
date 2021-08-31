import { Entity, Column, BaseEntity, PrimaryColumn, OneToOne, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { Answer } from "./Answer.entity"
import { Choice } from "./Choice.entity"
import { Subject } from "./Subject.entity"

@Entity()
export class Question extends BaseEntity
{

  @OneToOne(type => Subject)
  @PrimaryColumn()
  subject: Subject

  @Column()
  title: string

  @ManyToOne(type => Choice, choice => choice.results, { nullable: true })
  result: Choice

  @ManyToMany(type => Choice)
  @JoinTable()
  choices: Choice[]

  @OneToMany(type => Answer, answer => answer.question)
  answers: Answer[]

}