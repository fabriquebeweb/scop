import { Entity, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Enterprise } from './Enterprise.entity'
import { MeetingType } from './MeetingType.entity'

@Entity()
export class Status extends BaseEntity
{

  @ManyToOne(type => Enterprise, enterprise => enterprise.status, { primary: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: Enterprise

  @ManyToOne(type => MeetingType, meetingType => meetingType.status, { primary: true, nullable: true })
  meetingType: MeetingType

  @Column()
  majorityMin: number

  @Column({ nullable: true })
  majorityMax: number

  @Column()
  quorumMin: number

  @Column({ nullable: true })
  quorumMax: number

  @Column({ nullable: true })
  power: number

}
