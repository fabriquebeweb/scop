import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm'
import { Answer } from './Answer.entity'
import { Chapter } from './Chapter.entity'
import { Enterprise } from './Enterprise.entity'

@Entity()
export class Choice extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @ManyToOne(type => Enterprise, enterprise => enterprise.choices, { nullable: false })
  enterprise: Enterprise

  @ManyToMany(type => Chapter)
  chapters: Chapter[]

  @OneToMany(type => Chapter, chapter => chapter.result)
  results: Chapter[]

  @OneToMany(type => Answer, answer => answer.choice)
  answers: Answer[]

}
