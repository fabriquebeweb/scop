import { Entity, Column, BaseEntity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EnterpriseEntity } from '@scop/entities'

@Entity()
export class ProviderEntity extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  name: string

  @OneToMany(type => EnterpriseEntity, enterprise => enterprise.provider)
  enterprises: EnterpriseEntity[]

}
