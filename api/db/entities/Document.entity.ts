import { Entity, Column, PrimaryColumn, BaseEntity, OneToOne } from "typeorm"

@Entity()
export class Document extends BaseEntity {
  @Column()
  id: number

  @Column()
  path: string

  @Column({ nullable: true })
  name: string

  @OneToOne(type => meeting)
  @PrimaryColumn()
  meeting:meeting

}