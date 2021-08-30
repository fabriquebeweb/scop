import { Entity, Column, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: number

  @OneToOne(type => IdChoice)
  @PrimaryColumn({ nullable: true })
  idchoice:IdChoice

  @OneToOne(type => IdChapter)
  @PrimaryColumn()
  idChapter:IdChapter 

  @Column()
  nb_answer: number
}