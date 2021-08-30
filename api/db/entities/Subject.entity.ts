import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinTable } from "typeorm"
import { Meeting } from './Meeting.entity'
import { Question } from "./Question.entity"

@Entity()
export class Subject extends BaseEntity
{

  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  title: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  summary: string

  @ManyToOne(type => Meeting, meeting => meeting.subjects)
  meeting: Meeting

  @OneToOne(type => Question, { nullable: true })
  @JoinTable()
  question: Question

}