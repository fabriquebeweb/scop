import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm"

@Entity()
export class QuestionChoice extends BaseEntity {
  @PrimaryColumn()
  fk_question: 

  @OneToMany(type => Choice, choice => choice.questionChoice)
  choice: Choice

  @Column({ nullable: true })
  stat: number

}