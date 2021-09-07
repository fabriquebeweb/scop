import { Injectable } from '@nestjs/common'
import { Meeting } from 'db/entities/Meeting.entity'

@Injectable()
export class AdminMeetingsService {

  async getAllMeetings(enterpriseId: number) {
    return await Meeting.find({
      where: { enterprise: { id: enterpriseId } },
      relations: [
        "meetingType"
      ]
    })
  }

  async getOneMeeting(meetingId: number) {
    return await Meeting.findOne({
      where: { id: meetingId },
      relations: [
        "meetingType",
        "chapters"
      ]
    })
  }

  async saveOneMeeting(meeting: Meeting) {
    await Meeting.save(meeting)
  }

  async test() {
    return await Meeting.delete(1)
  }

}
