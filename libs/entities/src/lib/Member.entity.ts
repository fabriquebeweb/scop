import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm'
import { Answer, Enterprise, Participation } from '@scop/entities'

@Entity()
export class Member extends BaseEntity
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

  @Index('member_enterprise_idx')
  @ManyToOne(type => Enterprise, enterprise => enterprise.members, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: Enterprise

  @OneToMany(type => Participation, participation => participation.member, { cascade: true })
  participations: Participation[]

  @OneToMany(type => Participation, participation => participation.procuration, { nullable: true, cascade: true })
  procurations: Participation[]

  @OneToMany(type => Answer, answer => answer.member, { cascade: true })
  answers: Answer[]

}
