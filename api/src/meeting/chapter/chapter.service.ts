import { Injectable } from '@nestjs/common';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Choice } from 'db/entities/Choice.entity';
import { Answer } from 'db/entities/Answer.entity';

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

    //Récupérer un chapitre d'un meeting
    async getMeetingChapterResult(meetingId,chapterId){
      let chapter = await Chapter.findOne({
              where:{
                  meeting: {id:meetingId},
                  id:chapterId,
              },
              relations:["choices","answers"],
              })
      // chapter.choices.forEach(choice=>{
      // console.log( chapter.answers.filter(answer=>answer.choice.id === choice.id).length)
      // })
      console.log(chapter)
    }
}
