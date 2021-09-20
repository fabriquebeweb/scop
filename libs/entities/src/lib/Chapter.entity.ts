import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany, OneToMany, Index, OneToOne, JoinColumn } from 'typeorm'
import { Answer, Choice, Meeting, Question } from '@scop/entities'

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

  @OneToOne(type => Question, question => question.chapter, { cascade: true })
  @JoinColumn()
  question: Question

  @Index('chapter_meeting_idx')
  @ManyToOne(type => Meeting, meeting => meeting.chapters, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: Meeting

}
