import { Entity, Column, BaseEntity, ManyToOne } from 'typeorm'
import { EnterpriseEntity, MeetingTypeEntity } from '@scop/entities'

@Entity()
export class StatusEntity extends BaseEntity
{

  @ManyToOne(type => EnterpriseEntity, enterprise => enterprise.status, { primary: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: EnterpriseEntity

  @ManyToOne(type => MeetingTypeEntity, meetingType => meetingType.status, { primary: true, nullable: true })
  meetingType: MeetingTypeEntity

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
