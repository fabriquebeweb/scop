import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { AdminMeetingsService } from '@scop/api/admin/meetings/meetings.service'
import { AdminMailer } from '@scop/api/admin/admin.mailer'
import { Chapter, Meeting } from '@scop/entities'

@Controller('/meetings')
export class AdminMeetingsController {

  constructor(
    private readonly service: AdminMeetingsService,
    private readonly mailer: AdminMailer
  ){}

  @Get()
  getMeetings()
  {
    return this.service.getMeetings()
  }

  @Post()
  newMeeting( @Body() meeting: Meeting )
  {
    return this.service.setMeeting(meeting)
  }

  @Get('/types')
  getMeetingTypes()
  {
    return this.service.getMeetingTypes()
  }

  @Get('/:meeting')
  getMeeting( @Param('meeting') id: number )
  {
    return this.service.getMeeting(id)
  }

  @Put('/:meeting')
  updateMeeting( @Param('meeting') id: number, @Body() meeting: Meeting )
  {
    return this.service.resetMeeting(meeting)
  }

  @Delete('/:meeting')
  deleteMeeting( @Param('meeting') id: number )
  {
    return this.service.unsetMeeting(id)
  }

  @Post('/:meeting/invite')
  invite( @Param('meeting') meetingId: number )
  {
    return this.mailer.sendMeetingInvitations(meetingId)
  }

  @Post('/:meeting/chapters')
  newChapter( @Param('meeting') meetingId: number, @Body() chapter: Chapter )
  {
    return this.service.setChapter(chapter)
  }

  @Get('/:meeting/chapters/:chapter')
  getChapter( @Param('meeting') meetingId: number, @Param('chapter') chapterId: number )
  {
    return this.service.getChapter(chapterId)
  }

  @Put('/:meeting/chapters/:chapter')
  updateChapter( @Param('meeting') meetingId: number, @Param('chapter') chapterId: number, @Body() chapter: Chapter )
  {
    return this.service.resetChapter(chapter)
  }

  @Delete('/:meeting/chapters/:chapter')
  deleteChapter( @Param('meeting') meetingId: number, @Param('chapter') chapterId: number )
  {
    return this.service.unsetChapter(chapterId)
  }

}
