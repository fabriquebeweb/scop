import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm'
import { AnswerEntity, EnterpriseEntity, ParticipationEntity } from '@scop/entities'

@Entity()
export class UserEntity extends BaseEntity
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
  @ManyToOne(type => EnterpriseEntity, enterprise => enterprise.users, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: EnterpriseEntity

  @OneToMany(type => ParticipationEntity, participation => participation.user, { cascade: true })
  participations: ParticipationEntity[]

  @OneToMany(type => ParticipationEntity, participation => participation.procuration, { nullable: true, cascade: true })
  procurations: ParticipationEntity[]

  @OneToMany(type => AnswerEntity, answer => answer.user, { cascade: true })
  answers: AnswerEntity[]

}
