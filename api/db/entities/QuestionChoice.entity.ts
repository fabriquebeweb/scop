import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm"

@Entity()
export class QuestionChoice extends BaseEntity {
  @  @PrimaryColumn()
  fk_question: 

  @PrimaryColumn()
  fk_choice: 

  @Column({ nullable: true })
  stat: number

}