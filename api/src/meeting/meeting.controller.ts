import { Controller, Get, Param } from '@nestjs/common'
import { MeetingService } from './meeting.service'

@Controller()
export class MeetingController
{

  constructor(
    private readonly service: MeetingService
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

}
