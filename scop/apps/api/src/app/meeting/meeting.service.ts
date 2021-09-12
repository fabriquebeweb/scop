import { Injectable } from '@nestjs/common';
import { AnswerEntity, ChapterEntity, MeetingEntity } from '@scop/entities'
import { ChapterResultDTO } from '@scop/interfaces'
import { IsNull } from 'typeorm';

@Injectable()
export class MeetingService {

  async getMeeting(meetingId: number) : Promise<MeetingEntity>
  {
    return await MeetingEntity.findOne(meetingId)
  }

  async getMeetingChapters(meetingId: number) : Promise<ChapterEntity[]>
  {
    return await ChapterEntity.find({ where: { meeting: { id: meetingId } } })
  }

  async getMeetingChapter(meetingId: number, chapterId: number) : Promise<ChapterEntity>
  {
    return await ChapterEntity.findOne({
      where: {
        meeting: { id: meetingId },
        id: chapterId
      },
      relations: [
        "choices",
        "result"
      ]
    })
  }

  async saveChapterAnswer(answer: AnswerEntity) : Promise<void>
  {
    const chapter = await ChapterEntity.findOne({ where: { id: answer.chapter } })
    if (chapter.state) await AnswerEntity.save(answer)
  }

  async getMeetingChapterResult(meetingId: number, chapterId: number) : Promise<ChapterResultDTO>
  {
    const chapter = await ChapterEntity.findOne({
      where: {
        id: chapterId,
        meeting: { id: meetingId }
      },
      relations: [
        "choices",
        "result"
      ]
    })

    const chapterResult = {
      details: chapter,
      count: await AnswerEntity.count({
        where: {
          chapter: {
            id: chapterId,
            meeting: { id: meetingId }
          }
        }
      }),
      choices: []
    }

    for (const choice of chapter.choices)
    {
      chapterResult.choices.push({
        details: choice,
        count: await AnswerEntity.count({
          where: {
            chapter: {
              id: chapterId,
              meeting: { id: meetingId }
            },
            choice: choice.id
          }
        })
      })
    }

    chapterResult.choices.push({
      details: null,
      count: await AnswerEntity.count({
        where: {
          chapter: {
            id: chapterId,
            meeting: { id: meetingId }
          },
          choice: IsNull()
        }
      })
    })

    return chapterResult
  }

}
