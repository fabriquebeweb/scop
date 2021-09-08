import { Injectable } from '@nestjs/common';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { Choice } from 'db/entities/Choice.entity';
import { Answer } from 'db/entities/Answer.entity';

@Injectable()
export class ChapterService {

    //Fonction test
    async getResult(meetingId:string, chapterId:string){
        return await Answer.find({
            //select:["id","title"],
            where:{
                chapter:{id:1},
            },
            relations:["choice"],
            })
    }
}
