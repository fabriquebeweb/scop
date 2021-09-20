import { Answer, Chapter, Meeting, Question } from '@scop/entities'
import { QuestionResultDTO } from '@scop/interfaces'
import { InsertResult, IsNull } from 'typeorm'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MeetingService {

  async getMeeting(meetingId: number) : Promise<Meeting>
  {
    return await Meeting.findOne(meetingId)
  }

  async getMeetingChapters(meetingId: number) : Promise<Chapter[]>
  {
    return await Chapter.find({
      where: { meeting: { id: meetingId } },
      relations: [
        'question',
        'question.choices'
      ]
    })
  }

  async getMeetingChapter(meetingId: number, chapterId: number) : Promise<Chapter>
  {
    return await Chapter.findOne({
      where: {
        meeting: { id: meetingId },
        id: chapterId
      },
      relations: [
        'question',
        'question.choices',
        'question.result'
      ]
    })
  }

  async getQuestion(questionId: number) : Promise<Question>
  {
    return await Question.findOne(questionId, { relations: ['choices'] })
  }

  async saveChapterAnswer(answer: Answer) : Promise<InsertResult>
  {
    return await Answer.insert(answer)
  }

  /**
   * Fonction qui récupère les valeurs obtenues par choix pour chaque question-chapter lors du vote
   * @param meetingId
   * @param questionId
   * @returns le nombre de votes par choix et chapitre
   */
  async getQuestionResult(questionId: number) : Promise<QuestionResultDTO>
  {
    /*
    * Tout d'abord on sélectionne le chapitre tenant compte son id et l'id du meeting auquel il appartient
    * On crée les relations avec les tables choices et result afin de pouvoir ressortir plus tard les résultats par choix
    */
    const question = await Question.findOne({
      where: {
        id: questionId,
        // meeting: { id: meetingId }
      },
      relations: [
        'choices',
        'result'
      ]
    })

    const questionResult: QuestionResultDTO = {
      details: question,
      count: await Answer.count({
        where: {
          question: {
            id: questionId,
            // meeting: { id: meetingId }
          }
        }
      }),
      choices: []
    } as unknown as QuestionResultDTO

    // Pour chaque choix on va réaliser le count des votes et on va pousser dans la variable questionResult
    for (const choice of question.choices)
    {
      questionResult.choices.push({
        details: choice,
        count: await Answer.count({
          where: {
            question: {
              id: questionId,
              // meeting: { id: meetingId }
            },
            choice: choice.id
          }
        })
      })
    }

    // Pour les nulls on va les conter aussi et les pousser dans les résultats en tant que Abstention dans la variable questionResult
    questionResult.choices.push({
      details: null,
      count: await Answer.count({
        where: {
          question: {
            id: questionId,
            // meeting: { id: meetingId }
          },
          choice: IsNull()
        }
      })
    })

    // On retournera la variable questionResult avec les votes par choix afin de pouvoir les afficher dans le graphe dédié
    return questionResult
  }

}
