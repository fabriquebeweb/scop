import { Entity, Column, BaseEntity, ManyToOne, Generated, } from 'typeorm'
import { Meeting, Member } from '@scop/entities'

@Entity()
export class Participation extends BaseEntity
{

  @ManyToOne(type => Meeting, meeting => meeting.participations, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: Meeting

  @ManyToOne(type => Member, member => member.participations, { primary: true, nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  member: Member

  @Column({ unique: true })
  @Generated('uuid')
  code: string

  @Column({ nullable: true })
  isPresent: boolean

  @ManyToOne(type => Member, member => member.procurations, { nullable: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  procuration: Member

}
