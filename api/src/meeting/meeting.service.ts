import { Injectable } from '@nestjs/common';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';

@Injectable()
export class MeetingService {

  async getMeeting(meetingId: number) : Promise<Meeting>
  {
    return await Meeting.findOne(meetingId)
  }

  async getMeetingChapters(meetingId: number) : Promise<Chapter[]>
  {
    return await Chapter.find({ where: { meeting: { id: meetingId }}})
  }

}
