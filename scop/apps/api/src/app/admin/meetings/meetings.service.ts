import { Injectable } from '@nestjs/common'
import { DeleteResult, InsertResult } from 'typeorm'
import { MeetingEntity, MeetingTypeEntity } from '@scop/entities'

@Injectable()
export class AdminMeetingsService {

  async getMeetingTypes() : Promise<MeetingTypeEntity[]>
  {
    return await MeetingTypeEntity.find()
  }

  async getMeetings() : Promise<MeetingEntity[]>
  {
    return await MeetingEntity.find({
      relations: [
        "meetingType"
      ]
    })
  }

  async getMeeting(meetingId: number) : Promise<MeetingEntity>
  {
    return await MeetingEntity.findOne({
      where: { id: meetingId },
      relations: [
        "meetingType",
        "chapters"
      ]
    })
  }

  async setMeeting(meeting: MeetingEntity) : Promise<InsertResult>
  {
    return await MeetingEntity.insert(meeting)
  }

  async resetMeeting(meeting: MeetingEntity) : Promise<MeetingEntity>
  {
    return await MeetingEntity.save(meeting)
  }

  async unsetMeeting(meetingId: number) : Promise<DeleteResult>
  {
    return await MeetingEntity.delete(meetingId)
  }

}
