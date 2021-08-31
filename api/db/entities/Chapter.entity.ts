import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany, OneToMany, Index } from 'typeorm'
import { Answer } from './Answer.entity'
import { Choice } from './Choice.entity'
import { Meeting } from './Meeting.entity'

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

  @ManyToMany(type => Choice, { nullable: true })
  @JoinTable()
  choices: Choice[]

  @ManyToOne(type => Choice, choice => choice.results, { nullable: true })
  result: Choice

  @OneToMany(type => Answer, answer => answer.chapter, { nullable: true })
  answers: Answer[]

  @Index('chapter_meeting_idx')
  @ManyToOne(type => Meeting, meeting => meeting.chapters, { nullable: false })
  meeting: Meeting

}
