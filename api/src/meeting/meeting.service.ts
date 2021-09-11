import { Injectable } from '@nestjs/common';
import { Answer } from 'db/entities/Answer.entity';
import { Chapter } from 'db/entities/Chapter.entity';
import { Meeting } from 'db/entities/Meeting.entity';
import { ChapterResultDTO } from 'src/misc/dto/ChapterResult.dto';
import { IsNull } from 'typeorm';

@Injectable()
export class MeetingService {

  async getMeeting(meetingId: number) : Promise<Meeting>
  {
    return await Meeting.findOne(meetingId)
  }

  async getMeetingChapters(meetingId: number) : Promise<Chapter[]>
  {
    return await Chapter.find({ where: { meeting: { id: meetingId } } })
  }

  async getMeetingChapter(meetingId: number, chapterId: number) : Promise<Chapter>
  {
    return await Chapter.findOne({
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

  async saveChapterAnswer(answer: Answer) : Promise<void>
  {
    const chapter = await Chapter.findOne({ where: { id: answer.chapter } })
    if (chapter.state) await Answer.save(answer)
  }
  
  async getMeetingChapterResult(meetingId: number, chapterId: number) : Promise<ChapterResultDTO>
  {
    const chapter = await Chapter.findOne({
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
      count: await Answer.count({
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
        count: await Answer.count({
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
      count: await Answer.count({
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