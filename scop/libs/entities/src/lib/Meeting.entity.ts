import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm'
import { ChapterEntity, DocumentEntity, EnterpriseEntity, MeetingTypeEntity, ParticipationEntity } from '@scop/entities'

@Entity()
export class MeetingEntity extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column({ type: 'datetime' })
  date: Date

  @Column({ nullable: true })
  location: string

  @Index('meeting_enterprise_idx')
  @ManyToOne(type => EnterpriseEntity, enterprise => enterprise.meetings, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: EnterpriseEntity

  @ManyToOne(type => MeetingTypeEntity, meetingType => meetingType.meetings, { nullable: false })
  meetingType: MeetingTypeEntity

  @Column({ nullable: true })
  state: boolean

  @OneToMany(type => ParticipationEntity, participation => participation.user, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  participations: ParticipationEntity[]

  @OneToMany(type => DocumentEntity, document => document.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  documents: DocumentEntity[]

  @OneToMany(type => ChapterEntity, chapter => chapter.meeting, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapters: ChapterEntity[]

}
