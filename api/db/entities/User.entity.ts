import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm'
import { Answer } from './Answer.entity'
import { Enterprise } from './Enterprise.entity'
import { Participation } from './Participation.entity'

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

  @Column({ nullable: true })
  password: string

  @Column({ default: false })
  isAdmin: boolean

  @Index('user_enterprise_idx')
  @ManyToOne(type => Enterprise, enterprise => enterprise.users, { nullable: false })
  enterprise: Enterprise

  @OneToMany(type => Participation, participation => participation.user)
  participations: Participation[]

  @OneToMany(type => Participation, participation => participation.procuration, { nullable: true })
  procurations: Participation[]

  @OneToMany(type => Answer, answer => answer.user)
  answers: Answer[]

}
