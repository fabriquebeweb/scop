import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm"

@Entity()
export class Document extends BaseEntity {
  @Column()
  id: number

  @Column()
  path: string

  @Column({ nullable: true })
  name: string

  @PrimaryColumn()
  fk_meeting: 

}