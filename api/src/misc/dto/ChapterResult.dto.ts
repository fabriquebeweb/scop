import { Chapter } from 'db/entities/Chapter.entity';
import { ChoiceResultDTO } from './ChoiceResult.dto'

export interface ChapterResultDTO {

  count: number
  details: Chapter
  choices: ChoiceResultDTO[]

}
