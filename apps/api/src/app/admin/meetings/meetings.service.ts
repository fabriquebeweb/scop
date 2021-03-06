import { Chapter, Choice, Meeting, MeetingType, Member, Question, Participation } from '@scop/entities'
import { ChoiceOptionDTO, QuestionResultDTO } from '@scop/interfaces'
import { DeleteResult, ILike, InsertResult, IsNull } from 'typeorm'
import { MeetingService } from '@scop/api/meeting/meeting.service'
import { Injectable } from '@nestjs/common'

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
    const insert = await Meeting.insert(meeting)
    const members = await Member.find({
      select: ['id'],
      where: { enterprise: { id: meeting.enterprise.id ?? meeting.enterprise } }
    })

    for(const member of members)
    {
      await Participation.create({

        meeting: insert.raw,
        member: member,

      }).save()
    }

    return insert
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

  async setChapter(chapter: Chapter) : Promise<Chapter>
  {
    return await Chapter.save(chapter)
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
      .reduce((prev, current) => (prev.count > current.count) ? prev : current)
      .details

    question.details.state = false

    return await Question.save(question.details as unknown as Question)
  }

  async getChoiceOptions(payload: ChoiceOptionDTO)
  {
    return await Choice.find({
      where: [
        {
          enterprise: IsNull(),
          title: ILike(`%${payload.title}%`)
        },
        {
          enterprise: payload.enterprise,
          title: ILike(`%${payload.title}%`)
        }
      ],
      skip: 0,
      take: 3,
      cache: true
    })
  }

}
