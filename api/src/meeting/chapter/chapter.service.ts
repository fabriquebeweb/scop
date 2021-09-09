import { Injectable } from '@nestjs/common';
import { Answer } from 'db/entities/Answer.entity';
import { Chapter } from 'db/entities/Chapter.entity';
import { Choice } from 'db/entities/Choice.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Any } from 'typeorm';

@Injectable()
export class ChapterService {

    //#1 Récupère la liste de meetings : OK
    async getAllMeetings() {
        return await Meeting.find()
    }

    //#2 Récupère un meeting selon son id : OK
    async getOneMeeting(meetingId) {
        return await Meeting.find({
            where: {
                id:meetingId
            }
        })
    }

    //#3 Récupère la liste de tous les chapitres : OK
    async getAllChapters() {
        return await Chapter.find()
    
    }

    //#4 Récupère la liste de toutes les questions : OK
    async getAllQuestions() {
        return await Chapter.find({select: ["question"]})
    
    }

    //#5Récupère la liste des chapters d'un meeting : OK
    async getMeetingChapters( meetingId ) {
        return await Chapter.find({
            where: {
                meeting: { id:meetingId }
            },
            relations: ["meeting"]    
        })
    }

    //#6 Récupère un chapters d'un meeting : OK
    async getMeetingChapter( meetingId, chapterId ) {
        return await Chapter.find({
            where: {
                meeting: { id:meetingId },
                id:chapterId
            },
            relations: ["meeting"]    
        })
    }
    //#7 Récupère une question et ses choices pour un meeting : OK
    async getAQuestion(chapterId) {
        return await Chapter.find({
            where: {
                id:chapterId,                
            },
            relations: ["choices", "meeting"]
        })
        
    }

    //#8 Récupère un vote (question et choices) d'un meeting : IN PROGRESS
    // async getOneVote(chapterId) {
    //     return await Chapter.find({
    //         where: {id:chapterId},
    //         relations: ["choices", "meeting"],
    //         select: [
    //             "id", Choice.find({select: ["id", "title"]}), Meeting.find({select: ["id"]})//, "choices", "meeting", 
    //         ]
    //     })   
    // }

    //#9 Persister un vote : IN PROGRESS
    async saveOneVote1(answer: Answer) {
        await Answer.save(answer)
      }

    //#9 Persister un vote : A TEST
    async saveOneVote(answer: Answer) {
        await Answer.save(answer)
      }

    //   if (chapter.state) {
    //       await Answer.save(answer)
    //   } 

}
