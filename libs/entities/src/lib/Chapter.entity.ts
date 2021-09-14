import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany, OneToMany, Index } from 'typeorm'
import { Answer, Choice, Meeting } from '@scop/entities'

@Entity()
export class Chapter extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  summary: string

  @Column({ nullable: true })
  question: string

  @Column({ nullable: true })
  state: boolean

  @ManyToMany(type => Choice, { nullable: true, cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  @JoinTable()
  choices: Choice[]

  @ManyToOne(type => Choice, choice => choice.results, { nullable: true, onDelete: 'CASCADE', orphanedRowAction: 'nullify' })
  result: Choice

  @OneToMany(type => Answer, answer => answer.chapter, { nullable: true, cascade: true })
  answers: Answer[]

  @Index('chapter_meeting_idx')
  @ManyToOne(type => Meeting, meeting => meeting.chapters, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: Meeting

}