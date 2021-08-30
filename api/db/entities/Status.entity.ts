import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, Index } from "typeorm"
import { Enterprise } from "./Enterprise.entity"
import { MeetingType } from "./MeetingType.entity"

@Entity()
export class Status extends BaseEntity
{

  @ManyToOne(type => Enterprise, enterprise => enterprise.status)
  @PrimaryColumn()
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