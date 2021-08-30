import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Admin } from "./Admin.entity"
import { Answer } from "./Answer.entity"
import { Enterprise } from "./Enterprise.entity"
import { Participation } from "./Participation.entity"

@Entity()
export class User extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @ManyToOne(type => Enterprise, enterprise => enterprise.users)
  enterprise: Enterprise

  @OneToOne(type => Admin, { nullable: true })
  @JoinColumn()
  admin: Admin

  @OneToMany(type => Participation, participation => participation.user)
  participations: Participation[]

  @OneToMany(type => Participation, participation => participation.procuration, { nullable: true })
  procurations: Participation[]

  @OneToMany(type => Answer, answer => answer.user)
  answers: Answer[]

}