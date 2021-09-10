import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Answer } from 'db/entities/Answer.entity'
import { Chapter } from 'db/entities/Chapter.entity'
import { get } from 'http'
import { ChapterService } from './chapter/chapter.service'
import { MeetingService } from './meeting.service'

@Controller()
export class MeetingController
{
  constructor(
    private readonly service: MeetingService,
    private readonly chapterService: ChapterService
  ) {}

  @Get()
  meeting()
  {
    return 'MEETING'
  }

  @Get('/:meeting')
  getMeeting( @Param('meeting') id: number )
  {
    return this.service.getMeeting(id)
  }

  @Get('/:meeting/chapters')
  getMeetingChapters( @Param('meeting') id: number )
  {
    return this.service.getMeetingChapters(id)
  }

  @Get('/:meeting/chapter/:chapter')
  getMeetingChapter( @Param('meeting') meetingId: number, @Param('chapter') chapterId: number )
  {
    return this.service.getMeetingChapter(meetingId, chapterId)
  }

  // #7 Une question et ses choices pour un meeting : OK
    @Get('/:chapter/choices')
    vote(@Param('chapter') chapterId: string) {
    return this.chapterService.getAQuestion(chapterId)
  }

// #8 Persister un vote : IN PROGRESS
  @Post('/chapter/choices')
    async postVote(@Body() body: Answer){
      console.log(body);
      
      this.chapterService.saveOneVote(body)
  }

}
