import { Entity, Column, BaseEntity, ManyToOne, } from 'typeorm'
import { MeetingEntity, UserEntity } from '@scop/entities'

@Entity()
export class ParticipationEntity extends BaseEntity
{

  @ManyToOne(type => MeetingEntity, meeting => meeting.participations, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: MeetingEntity

  @ManyToOne(type => UserEntity, user => user.participations, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  user: UserEntity

  // @Column({ unique: true })
  @Column()
  code: string

  @Column({ nullable: true })
  isPresent: boolean

  @ManyToOne(type => UserEntity, user => user.procurations, { nullable: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  procuration: UserEntity

}
