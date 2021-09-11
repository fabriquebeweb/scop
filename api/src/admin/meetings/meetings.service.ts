import { Injectable } from '@nestjs/common'
import { Meeting } from 'db/entities/Meeting.entity'
import { MeetingType } from 'db/entities/MeetingType.entity'
import { InsertResult } from 'typeorm'

@Injectable()
export class AdminMeetingsService {

  async getMeetingTypes() : Promise<MeetingType[]>
  {
    return await MeetingType.find()
  }

  async getMeetings() : Promise<Meeting[]>
  {
    return await Meeting.find({
      relations: [
        "meetingType"
      ]
    })
  }

  async getMeeting(meetingId: number) : Promise<Meeting>
  {
    return await Meeting.findOne({
      where: { id: meetingId },
      relations: [
        "meetingType",
        "chapters"
      ]
    })
  }

  async setMeeting(meeting: Meeting) : Promise<InsertResult>
  {
    return await Meeting.insert(meeting)
  }

  async updateMeeting(meeting: Meeting) : Promise<Meeting>
  {
    return await Meeting.save(meeting)
  }

  async unsetMeeting(meetingId: number) : Promise<any>
  {
    return await Meeting.delete(meetingId)
  }

}
