import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm'
import { Document } from './Document.entity'
import { Enterprise } from './Enterprise.entity'
import { MeetingType } from './MeetingType.entity'
import { Participation } from './Participation.entity'
import { Chapter } from './Chapter.entity'

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

  @OneToMany(type => Participation, participation => participation.user, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  participations: Participation[]

  @OneToMany(type => Document, document => document.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  documents: Document[]

  @OneToMany(type => Chapter, chapter => chapter.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapters: Chapter[]

}
