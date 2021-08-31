import { Entity, BaseEntity, ManyToOne } from 'typeorm'
import { Chapter } from './Chapter.entity'
import { Choice } from './Choice.entity'
import { User } from './User.entity'

@Entity()
export class Answer extends BaseEntity
{

  @ManyToOne(type => Chapter, chapter => chapter.answers, { primary: true })
  chapter: Chapter

  @ManyToOne(type => User, user => user.answers, { primary: true })
  user: User

  @ManyToOne(type => Choice, choice => choice.answers, { nullable: true })
  choice: Choice

}
