import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm"

@Entity()
export class Chapter extends BaseEntity {
  @Column()
  id: number

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  summary: string

  @PrimaryColumn()
  fk_meeting: 
}