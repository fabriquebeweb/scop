import { Chapter } from '@scop/entities'
import { ChoiceResultDTO } from '@scop/interfaces'

export interface ChapterResultDTO {

  count: number
  details: Chapter
  choices: ChoiceResultDTO[]

}
