import { Entity, Column, BaseEntity, ManyToOne, } from 'typeorm'
import { Meeting } from './Meeting.entity'
import { User } from './User.entity'

@Entity()
export class Participation extends BaseEntity
{

  @ManyToOne(type => Meeting, meeting => meeting.participations, { primary: true })
  meeting: Meeting

  @ManyToOne(type => User, user => user.participations, { primary: true })
  user: User

  @Column({ unique: true })
  password: string

  @Column({ nullable: true })
  isPresent: boolean

  @ManyToOne(type => User, user => user.procurations, { nullable: true })
  procuration: User

}
