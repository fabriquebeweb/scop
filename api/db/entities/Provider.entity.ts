import { Entity, Column, BaseEntity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Enterprise } from './Enterprise.entity'

@Entity()
export class Provider extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  name: string

  @OneToMany(type => Enterprise, enterprise => enterprise.provider)
  enterprises: Enterprise[]

}
