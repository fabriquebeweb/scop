import { Injectable } from '@nestjs/common';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Choice } from 'db/entities/Choice.entity';
import { Answer } from 'db/entities/Answer.entity';
import { IsNull } from 'typeorm';

@Injectable()
export class ChapterService {

    // //Récupérer les résultats par chapitre
    // async getResult(meetingId, chapterId){
    //     return await Chapter.find({
    //         select:["id","title","question"],
    //         where:{
    //             meeting: {id:meetingId},
    //             id:chapterId
    //         },
    //         relations:["choices","answers"]
    //         })
    // }

//Récupérer les résultats par chapitre
    async getResult(meetingId, chapterId){
        return await Answer.findAndCount({
            //select:["id","title"],
            where:{
                chapter: {id:chapterId},
            },
            relations:["chapter","choice"],
            })
    }

// //Afficher les info d'un meeting
//     async getMeeting(meetingId){
//         return await Meeting.find({
//             where:{
//                 id:meetingId,
//             },
//             //relations:["choice"],
//             })
//     }

//     async getChapter(meetingId, chapterId){
//         return await Chapter.find({
//             where:{
//                 id:meetingId,
//                 id:chapterId,
//             },
//             relations:["meeting"],
//             })
//     }

//Requête Sidney
    async getAnswer(chapterId){
        return await Chapter.find({
            where:{
                id:chapterId,
            },
            relations:["choices","meeting"],
            })
    }

     //Récupérer un chapitre d'un meeting
    // async getMeetingChapter(meetingId,chapterId){
    //     return await Chapter.find({
    //         where:{
    //             meeting: {id:meetingId},
    //             id:chapterId,
    //         },
    //         relations:["meeting","choices"],
    //         })
    // }

    //Récupérer les résultats du vote d'un chapitre d'un meeting
    async getMeetingChapterResult(meetingId: number, chapterId: number)
    {

      //Création d'une variable qui requête l'info dont on a besoin de la bdd : tout ce qui est lié aux choix et les votes
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

      //Création objet qui héberge les détails du chapitre, les choix disponibles et le nb total de votes
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

      //Création d'une boucle qui va calculer le nb de votes par choix et qui va envoyer l'info à chapterResult
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

      //On supprime dans l'objet chapterResult les info d'answers pour ne pas saturer la table
      return chapterResult

    }

}
