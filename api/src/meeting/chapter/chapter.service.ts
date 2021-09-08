import { Injectable } from '@nestjs/common';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Choice } from 'db/entities/Choice.entity';
import { Answer } from 'db/entities/Answer.entity';

@Injectable()
export class ChapterService {

    //Récupérer les résultats par chapitre
    async getResult(meetingId, chapterId){
        return await Answer.findAndCount({
            //select:["id","title"],
            where:{
                chapter: {meetingId:meetingId, id:chapterId}
            },
            relations:["choice","chapter"],
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
}
