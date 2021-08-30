import { Entity, PrimaryColumn, BaseEntity } from "typeorm"

@Entity()
export class Answer extends BaseEntity {
  @PrimaryColumn()
  fk_question: 

  @PrimaryColumn()
  fk_user: 

  @PrimaryColumn({ nullable: true })
  fk_choice: 

}