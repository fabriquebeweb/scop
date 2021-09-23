import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
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

  @Get('/:meeting/question/:question')
  getQuestion( @Param('meeting') meetingId: number, @Param('question') questionId : number )
  {
    return this.service.getQuestion(questionId)
  }

  @Post('/:meeting/question/:question')
  postChapterAnswer( @Body() answer: Answer )
  {
    return this.service.saveChapterAnswer(answer)
  }

  @Get('/:meeting/question/:question/results')
  getQuestionResult( @Param('meeting') meetingId: number, @Param('question') questionId : number )
  {
    return this.service.getQuestionResult(questionId)
  }

}
