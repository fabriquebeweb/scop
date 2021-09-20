import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany, OneToMany, Index, OneToOne } from 'typeorm'
import { Answer, Chapter, Choice } from '@scop/entities'

@Entity()
export class Question extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @Column({ nullable: true })
  state: boolean

  @ManyToMany(type => Choice, { nullable: true, cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  @JoinTable()
  choices: Choice[]

  @OneToMany(type => Answer, answer => answer.question, { nullable: true, cascade: true })
  answers: Answer[]

  @ManyToOne(type => Choice, choice => choice.results, { nullable: true, onDelete: 'CASCADE', orphanedRowAction: 'nullify' })
  result: Choice

  @OneToOne(type => Chapter, chapter => chapter.question, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapter: Chapter

}
