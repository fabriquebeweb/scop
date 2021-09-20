import { Answer, Chapter, Choice, Meeting } from '@scop/entities'
import { ChapterResultDTO } from '@scop/interfaces'
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
    return await Chapter.find({ where: { meeting: { id: meetingId } } })
  }

  async getMeetingChapter(meetingId: number, chapterId: number) : Promise<Chapter>
  {
    return await Chapter.findOne({
      where: {
        meeting: { id: meetingId },
        id: chapterId
      },
      relations: [
        "choices",
        "result"
      ]
    })
  }

  async saveChapterAnswer(answer: Answer) : Promise<InsertResult>
  {
    return await Answer.insert(answer)
  }

  /**
   * Fonction qui récupère les valeurs obtenues par choix pour chaque question-chapter lors du vote
   * @param meetingId
   * @param chapterId
   * @returns le nombre de votes par choix et chapitre
   */
  async getMeetingChapterResult(meetingId: number, chapterId: number) : Promise<ChapterResultDTO>
  {
    /*
    * Tout d'abord on sélectionne le chapitre tenant compte son id et l'id du meeting auquel il appartient
    * On crée les relations avec les tables choices et result afin de pouvoir ressortir plus tard les résultats par choix
    */
    const chapter = await Chapter.findOne({
      where: {
        id: chapterId,
        meeting: { id: meetingId }
      },
      relations: [
        "choices",
        "result"
      ]
    })

    //Pour chaque chapitre on va faire un count des votes pour chaque choix
    const chapterResult = {
      details: chapter,
      count: await Answer.count({
        where: {
          chapter: {
            id: chapterId,
            meeting: { id: meetingId }
          }
        }
      }),
      choices: []
    }
    //Pour chaque choix on va réaliser le count des votes et on va pousser dans la variable chapterResult
    for (const choice of chapter.choices)
    {
      chapterResult.choices.push({
        details: choice,
        count: await Answer.count({
          where: {
            chapter: {
              id: chapterId,
              meeting: { id: meetingId }
            },
            choice: choice.id
          }
        })
      })
    }
    //Pour les nulls on va les conter aussi et les pousser dans les résultats en tant que Abstention dans la variable chapterResult
    chapterResult.choices.push({
      details: null,
      count: await Answer.count({
        where: {
          chapter: {
            id: chapterId,
            meeting: { id: meetingId }
          },
          choice: IsNull()
        }
      })
    })
    //On retournera la variable chapterResult avec les votes par choix afin de pouvoir les afficher dans le graphe dédié
    return chapterResult
  }

}
