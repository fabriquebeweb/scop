import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany, OneToMany, Index } from 'typeorm'
import { AnswerEntity, ChoiceEntity, MeetingEntity } from '@scop/entities'

@Entity()
export class ChapterEntity extends BaseEntity
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

  @ManyToMany(type => ChoiceEntity, { nullable: true, cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  @JoinTable()
  choices: ChoiceEntity[]

  @ManyToOne(type => ChoiceEntity, choice => choice.results, { nullable: true, onDelete: 'CASCADE', orphanedRowAction: 'nullify' })
  result: ChoiceEntity

  @OneToMany(type => AnswerEntity, answer => answer.chapter, { nullable: true, cascade: true })
  answers: AnswerEntity[]

  @Index('chapter_meeting_idx')
  @ManyToOne(type => MeetingEntity, meeting => meeting.chapters, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: MeetingEntity

}
