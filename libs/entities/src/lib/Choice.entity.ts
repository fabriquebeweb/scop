import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm'
import { Answer, Chapter, Enterprise } from '@scop/entities'

@Entity()
export class Choice extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @ManyToOne(type => Enterprise, enterprise => enterprise.choices, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: Enterprise

  @ManyToMany(type => Chapter, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapters: Chapter[]

  @OneToMany(type => Chapter, chapter => chapter.result, { orphanedRowAction: 'nullify' })
  results: Chapter[]

  @OneToMany(type => Answer, answer => answer.choice)
  answers: Answer[]

}