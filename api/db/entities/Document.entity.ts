import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Meeting } from "./Meeting.entity"

@Entity()
export class Document extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  path: string

  @Column({ nullable: true })
  name: string

  @ManyToOne(type => Meeting, meeting => meeting.documents)
  meeting: Meeting

}