import { MeetingService } from '@scop/api/meeting/meeting.service'
import { Chapter, Meeting, MeetingType, Question } from '@scop/entities'
import { DeleteResult, InsertResult } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { QuestionResultDTO } from '@scop/interfaces'

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
    return await Meeting.find({ relations: ['meetingType'] })
  }

  async getMeeting(meetingId: number) : Promise<Meeting>
  {
    const meeting = await Meeting.findOne({
      where: { id: meetingId },
      relations: [
        'meetingType',
        'chapters',
        'chapters.question'
      ]
    })

    for(const chapter of meeting.chapters)
    {
      if (chapter.question) chapter.question = await Question.findOne({
        where: { id: chapter.question.id },
        relations: ['choices']
      })
    }

    return meeting
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
        'question',
        'question.result',
        'question.choices'
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

  async startVote(questionId: number) : Promise<Question>
  {
    const question: Question = await Question.findOne(questionId)
    question.state = true
    return await Question.save(question)
  }

  async endVote(questionId: number) : Promise<Question>
  {
    const question: QuestionResultDTO = await this.meetingService.getQuestionResult(questionId)

    question.details.result = question.choices
      .filter(choice => choice.details != null)
      .reduce((prev, current) => (prev.count > current.count) ? prev : current).details

    question.details.state = false

    return await Question.save(question.details as unknown as Question)
  }

}
