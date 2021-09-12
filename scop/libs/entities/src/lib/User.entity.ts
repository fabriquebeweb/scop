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
  @ManyToOne(type => Enterprise, enterprise => enterprise.users, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: Enterprise

  @OneToMany(type => Participation, participation => participation.user, { cascade: true })
  participations: Participation[]

  @OneToMany(type => Participation, participation => participation.procuration, { nullable: true, cascade: true })
  procurations: Participation[]

  @OneToMany(type => Answer, answer => answer.user, { cascade: true })
  answers: Answer[]

}
