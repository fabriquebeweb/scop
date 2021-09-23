import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm'
import { Chapter, Document, Enterprise, MeetingType, Participation } from '@scop/entities'

@Entity()
export class Meeting extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column({ type: 'datetime' })
  date: Date

  @Column({ nullable: true })
  location: string

  @Index('meeting_enterprise_idx')
  @ManyToOne(type => Enterprise, enterprise => enterprise.meetings, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: Enterprise

  @ManyToOne(type => MeetingType, meetingType => meetingType.meetings, { nullable: false })
  meetingType: MeetingType

  @Column({ nullable: true })
  state: boolean

  @OneToMany(type => Participation, participation => participation.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  participations: Participation[]

  @OneToMany(type => Document, document => document.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  documents: Document[]

  @OneToMany(type => Chapter, chapter => chapter.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapters: Chapter[]

}
