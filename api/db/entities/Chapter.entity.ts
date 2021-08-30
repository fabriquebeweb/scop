import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from "typeorm"

@Entity()
export class Chapter extends BaseEntity {
  @OneToOne(type => Id)
  @PrimaryColumn()
  id: id

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  summary: string

  @OneToMany(type => Meeting, meeting => meeting.Id)
  id: meeting
}