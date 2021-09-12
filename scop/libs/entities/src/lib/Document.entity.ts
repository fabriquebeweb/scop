import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm'
import { MeetingEntity } from '@scop/entities'

@Entity()
export class DocumentEntity extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  path: string

  @Column({ nullable: true })
  name: string

  @Index('document_meeting_idx')
  @ManyToOne(type => MeetingEntity, meeting => meeting.documents, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  meeting: MeetingEntity

}
