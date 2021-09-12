import { Entity, Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { ChoiceEntity, MeetingEntity, ProviderEntity, StatusEntity, UserEntity } from '@scop/entities'

@Entity()
export class EnterpriseEntity extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  name: string

  @Column({ nullable: true })
  logo: string

  @Column({ nullable: true })
  primary: string

  @Column({ nullable: true })
  secondary: string

  @Column({ nullable: true })
  ternary: string

  @ManyToOne(type => ProviderEntity, provider => provider.enterprises, { nullable: false })
  provider: ProviderEntity

  @OneToMany(type => StatusEntity, status => status.enterprise, { cascade: true })
  status: StatusEntity[]

  @OneToMany(type => UserEntity, user => user.enterprise, { cascade: true })
  users: UserEntity[]

  @OneToMany(type => MeetingEntity, meeting => meeting.enterprise, { cascade: true })
  meetings: MeetingEntity[]

  @OneToMany(type => ChoiceEntity, choice => choice.enterprise, { cascade: true })
  choices: ChoiceEntity[]

}
