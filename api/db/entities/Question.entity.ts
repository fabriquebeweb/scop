import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm"

@Entity()
export class Question extends BaseEntity {
  @Column()
  id: number

  @Column()
  title: number

  @PrimaryColumn({ nullable: true })
  fk_result: 

  @PrimaryColumn()
  fk_chapter: 

  @Column()
  nb_answer: number
}