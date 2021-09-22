import { Entity, Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Choice, Meeting, Provider, Status, Member } from '@scop/entities'

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

  @ManyToOne(type => Provider, provider => provider.enterprises)
  provider: Provider

  @OneToMany(type => Status, status => status.enterprise, { cascade: true })
  status: Status[]

  @OneToMany(type => Member, member => member.enterprise, { cascade: true })
  members: Member[]

  @OneToMany(type => Meeting, meeting => meeting.enterprise, { cascade: true })
  meetings: Meeting[]

  @OneToMany(type => Choice, choice => choice.enterprise, { cascade: true })
  choices: Choice[]

}
