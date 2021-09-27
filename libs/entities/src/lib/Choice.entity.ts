import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm'
import { Answer, Chapter, Enterprise, Question } from '@scop/entities'

@Entity()
export class Choice extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @ManyToMany(type => Question, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  questions: Question[]

  @OneToMany(type => Question, question => question.result, { orphanedRowAction: 'nullify' })
  results: Question[]

  @OneToMany(type => Answer, answer => answer.choice)
  answers: Answer[]

  @ManyToOne(type => Enterprise, enterprise => enterprise.choices, { onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: Enterprise

}
