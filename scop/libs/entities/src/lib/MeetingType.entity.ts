import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MeetingEntity, StatusEntity } from '@scop/entities'

@Entity()
export class MeetingTypeEntity extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @OneToMany(type => StatusEntity, status => status.meetingType, { nullable: true })
  status: StatusEntity[]

  @OneToMany(type => MeetingEntity, meeting => meeting.meetingType, { nullable: true })
  meetings: MeetingEntity[]

}
