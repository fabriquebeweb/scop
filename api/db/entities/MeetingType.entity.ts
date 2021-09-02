import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Meeting } from './Meeting.entity'
import { Status } from './Status.entity'

@Entity()
export class MeetingType extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @OneToMany(type => Status, status => status.meetingType, { nullable: true })
  status: Status[]

  @OneToMany(type => Meeting, meeting => meeting.meetingType, { nullable: true })
  meetings: Meeting[]

}
