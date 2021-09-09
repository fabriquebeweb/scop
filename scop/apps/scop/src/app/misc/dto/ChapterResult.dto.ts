import { Chapter } from '../entities/Chapter'
import { ChoiceResultDTO } from './ChoiceResult.dto'

export interface ChapterResultDTO {

  count: number
  chapterDetails: Chapter
  choiceResults: ChoiceResultDTO[]

}
