import { Entity, Column, BaseEntity, ManyToOne, } from 'typeorm'
import { Meeting } from './Meeting.entity'
import { User } from './User.entity'

@Entity()
export class Participation extends BaseEntity
{

  @ManyToOne(type => Meeting, meeting => meeting.participations, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: Meeting

  @ManyToOne(type => User, user => user.participations, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  user: User

  // @Column({ unique: true })
  @Column()
  code: string

  @Column({ nullable: true })
  isPresent: boolean

  @ManyToOne(type => User, user => user.procurations, { nullable: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  procuration: User

}
