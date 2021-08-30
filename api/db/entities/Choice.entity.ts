import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm"

@Entity()
export class Choice extends BaseEntity {
  @Column()
  id: number

  @Column()
  title: string

  @PrimaryColumn()
  fk_enterprise: 

}