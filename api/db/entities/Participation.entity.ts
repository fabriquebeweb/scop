import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, } from "typeorm"
import { Meeting } from "./Meeting.entity"
import { User } from "./User.entity"

@Entity()
export class Participation extends BaseEntity {
  @ManyToOne(type => Meeting, meeting => meeting.participations)
  @PrimaryColumn()
  meeting: Meeting 

  @ManyToOne(type => User, user => user.participations)
  @PrimaryColumn()
  user: User

  @Column({ unique: true })
  code: string

  @Column({ nullable: true })
  isPresent: boolean

  @ManyToOne(type => User, user => user.procurations, { nullable: true })
  procuration: User
}