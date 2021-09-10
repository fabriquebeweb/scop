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

    
    //#8 Persister un vote : IN PROGRESS
    async saveOneVote(answer: Answer) {
        let test = await Chapter.findOne({ 
            select: ["id"],
            where: {
                id: answer.chapter
            }
        })

        console.log(test)
        if (test.id) await Answer.save(answer)
      }
 

}
