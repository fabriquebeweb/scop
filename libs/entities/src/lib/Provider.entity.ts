import { Entity, Column, BaseEntity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Enterprise } from '@scop/entities'

@Entity()
export class Provider extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @OneToMany(type => Enterprise, enterprise => enterprise.provider)
  enterprises: Enterprise[]

}
