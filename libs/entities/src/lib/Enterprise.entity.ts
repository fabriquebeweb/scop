import { Entity, Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Choice, Meeting, Provider, Status, User } from '@scop/entities'

@Entity()
export class Enterprise extends BaseEntity
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

  @ManyToOne(type => Provider, provider => provider.enterprises, { nullable: false })
  provider: Provider

  @OneToMany(type => Status, status => status.enterprise, { cascade: true })
  status: Status[]

  @OneToMany(type => User, user => user.enterprise, { cascade: true })
  users: User[]

  @OneToMany(type => Meeting, meeting => meeting.enterprise, { cascade: true })
  meetings: Meeting[]

  @OneToMany(type => Choice, choice => choice.enterprise, { cascade: true })
  choices: Choice[]

}
