import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm'
import { AnswerEntity, ChapterEntity, EnterpriseEntity } from '@scop/entities'

@Entity()
export class ChoiceEntity extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @ManyToOne(type => EnterpriseEntity, enterprise => enterprise.choices, { nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  enterprise: EnterpriseEntity

  @ManyToMany(type => ChapterEntity, { cascade: true, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  chapters: ChapterEntity[]

  @OneToMany(type => ChapterEntity, chapter => chapter.result, { orphanedRowAction: 'nullify' })
  results: ChapterEntity[]

  @OneToMany(type => AnswerEntity, answer => answer.choice)
  answers: AnswerEntity[]

}
