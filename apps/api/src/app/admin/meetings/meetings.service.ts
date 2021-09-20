import { Injectable } from '@nestjs/common'
import { DeleteResult, InsertResult } from 'typeorm'
import { Chapter, Meeting, MeetingType } from '@scop/entities'
import { MeetingService } from '@scop/api/meeting/meeting.service'

@Injectable()
export class AdminMeetingsService {

  constructor(
    private readonly meetingService: MeetingService
  ){}

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
        "chapters",
        "chapters.choices"
      ]
    })
  }

  async setMeeting(meeting: Meeting) : Promise<InsertResult>
  {
    return await Meeting.insert(meeting)
  }

  async resetMeeting(meeting: Meeting) : Promise<Meeting>
  {
    return await Meeting.save(meeting)
  }

  async unsetMeeting(meetingId: number) : Promise<DeleteResult>
  {
    return await Meeting.delete(meetingId)
  }
  
  async getChapter(chapterId: number) : Promise<Chapter>
  {
    return await Chapter.findOne(chapterId, {
      relations: [
        'result',
        'choices'
      ]
    })
  }

  async setChapter(chapter: Chapter) : Promise<InsertResult>
  {
    return await Chapter.insert(chapter)
  }

  async resetChapter(chapter: Chapter) : Promise<Chapter>
  {
    return await Chapter.save(chapter)
  }

  async unsetChapter(chapterId: number) : Promise<DeleteResult>
  {
    return await Chapter.delete(chapterId)
  }

  async startVote(id: number)
  {
    const chapter: Chapter = await Chapter.findOne(id)
    chapter.state = true
    return await Chapter.save(chapter)
  }

  async endVote(id: number)
  {
    const chapter: Chapter = await Chapter.findOne(id)
    chapter.state = false
    return await Chapter.save(chapter)
  }

  async getMeetingChapterResultWinner(meetingId: number, chapterId: number)
  {
    let chapterResult = await this.meetingService.getMeetingChapterResult(meetingId, chapterId)
    chapterResult.details.result = chapterResult.choices.filter(choice => choice.details != null).reduce((prev, current) => (prev.count > current.count) ? prev : current).details
    return chapterResult.details

  }

  async saveMeetingChapterResultWinner(meetingId: number, chapterId: number)
  {
    let modifiedChapter = await this.getMeetingChapterResultWinner(meetingId, chapterId)
    modifiedChapter.state = false
    return await Chapter.create(modifiedChapter).save()
  }

}
