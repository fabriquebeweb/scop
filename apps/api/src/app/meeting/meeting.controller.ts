import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { MeetingService } from '@scop/api/meeting/meeting.service'
import { Answer } from '@scop/entities'

@Controller()
export class MeetingController{

  constructor(
    private readonly service: MeetingService
  ){}

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

  @Post('/:meeting/chapter/:chapter')
  postChapterAnswer( @Body() answer: Answer )
  {
    return this.service.saveChapterAnswer(answer)
  }

  @Get('/:meeting/chapter/:chapter/results')
  chapter( @Param('meeting') meetingId: number, @Param('chapter') chapterId : number )
  {
    return this.service.getMeetingChapterResult(meetingId, chapterId)
  }

  // @Get('/:meeting/chapter/:chapter/results')
  // winner( @Param('meeting') meetingId: number, @Param('chapter') chapterId : number )
  // {
  //   return this.service.getMeetingChapterResultWinner(meetingId, chapterId)
  // }

}
