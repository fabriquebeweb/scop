import { Entity, Column, BaseEntity, PrimaryColumn, OneToOne } from "typeorm"
import { User } from "./User.entity"

@Entity()
export class Admin extends BaseEntity
{

  @OneToOne(type => User)
  @PrimaryColumn()
  user: User

  @Column({ nullable: true })
  password: string

}