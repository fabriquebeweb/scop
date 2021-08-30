import { Entity, Column, BaseEntity, PrimaryColumn, OneToOne } from "typeorm"
import { User } from "./User.entity"

@Entity()
export class Admin extends BaseEntity {
  @PrimaryColumn()
  @OneToOne(type => User)
  user: User

  @Column({ nullable: true })
  password: string
}