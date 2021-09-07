import { Injectable } from '@nestjs/common';
import { Meeting } from 'db/entities/Meeting.entity';

@Injectable()
export class MeetingService {

  async getMeeting(meetingId: number) : Promise<Meeting>
  {
    return await Meeting.findOne(meetingId)
  }

}
