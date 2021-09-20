import { Chapter, ChoiceResultDTO, Question } from '@scop/interfaces'

export interface QuestionResultDTO {

  count: number
  details: Question
  choices: ChoiceResultDTO[]

}
