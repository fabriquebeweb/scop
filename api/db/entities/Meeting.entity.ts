import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Document } from "./Document.entity"
import { Enterprise } from "./Enterprise.entity"
import { MeetingType } from "./MeetingType.entity"
import { Participation } from "./Participation.entity"
import { Subject } from "./Subject.entity"

@Entity()
export class Meeting extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column({ type: 'datetime' })
  date: Date

  @Column({ nullable: true })
  location: string

  @ManyToOne(type => Enterprise, enterprise => enterprise.meetings)
  enterprise: Enterprise

  @ManyToOne(type => MeetingType, meetingType => meetingType.meetings)
  meetingType: MeetingType

  @Column({ nullable: true })
  state: boolean

  @OneToMany(type => Participation, participation => participation.user)
  participations: Participation[]

  @OneToMany(type => Document, document => document.meeting)
  documents: Document[]

  @OneToMany(type => Subject, subject => subject.meeting)
  subjects: Subject[]

}