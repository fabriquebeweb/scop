import { Injectable } from '@nestjs/common'
import { Enterprise } from 'db/entities/Enterprise.entity'
import { Meeting } from 'db/entities/Meeting.entity'
import { InsertResult } from 'typeorm'

@Injectable()
export class AdminMeetingsService {

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
