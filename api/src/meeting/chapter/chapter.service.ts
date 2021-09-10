import { Injectable } from '@nestjs/common';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Choice } from 'db/entities/Choice.entity';
import { Answer } from 'db/entities/Answer.entity';
import { Any, IsNull } from 'typeorm';

@Injectable()
export class ChapterService {

  // Récupère la liste de toutes les questions : OK
  async getAllQuestions()
  {
    return await Chapter.find({select: ["question"]})
  }

  // Récupère une question et ses choices pour un meeting : OK
  async getAQuestion(chapterId)
  {
    return await Chapter.find({
      where: {
        id:chapterId,                
      },
      relations: ["choices", "meeting"]
    })
        
  }

  // Persister un vote : IN PROGRESS
  async saveOneVote(answer: Answer)
  {
    let test = await Chapter.findOne({ 
      select: ["id"],
      where: {
        id: answer.chapter
      }
    })

    console.log(test)
    if (test.id) await Answer.save(answer)
  }
 
  // Requête Sidney
  async getAnswer(chapterId)
  {
    return await Chapter.find({
      where: {
        id: chapterId
      },
      relations: [
        "choices",
        "meeting"
      ]
    })
  }

  // Récupérer les résultats du vote d'un chapitre d'un meeting
  async getMeetingChapterResult(meetingId: number, chapterId: number)
  {
    // Requête l'info dont on a besoin de la BDD
    let chapter = await Chapter.findOne({
      where: {
        id: chapterId,
        meeting: { id: meetingId }
      },
      relations: [
        "choices",
        "result"
      ]
    })

    // Création objet qui héberge les détails du chapitre
    let chapterResult = {
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

    // Boucle qui calcule les votes par choix
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

    return chapterResult
  }

}
