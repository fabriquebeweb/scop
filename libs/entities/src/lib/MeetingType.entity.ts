import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Meeting, Status } from '@scop/entities'

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
