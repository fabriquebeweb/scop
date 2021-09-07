import { Injectable } from '@nestjs/common';
import { Meeting } from 'db/entities/Meeting.entity';

@Injectable()
export class ChapterService {

    //Fonction test
    async getResult(meetingId:string, chapterId:string){
        return await Meeting.find({select:["date"]})
    }
}
