import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from "typeorm"
import { Answer } from "./Answer.entity"
import { Enterprise } from "./Enterprise.entity"
import { Question } from "./Question.entity"

@Entity()
export class Choice extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @ManyToOne(type => Enterprise, enterprise => enterprise.choices)
  enterprise: Enterprise

  @ManyToMany(type => Question)
  questions: Question[]

  @OneToMany(type => Question, question => question.result)
  results: Question[]

  @OneToMany(type => Answer, answer => answer.choice)
  answers: Answer[]

}