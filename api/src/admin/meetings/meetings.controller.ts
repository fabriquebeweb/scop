import { Body, Controller, Delete, Get, Headers, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common'
import { Meeting } from 'db/entities/Meeting.entity'
import { AdminMeetingsService } from './meetings.service'

@Controller('/meetings')
export class AdminMeetingsController {

  constructor(
    private readonly meetings: AdminMeetingsService
  ) {}

  @Get()
  meetingsList()
  {
    return this.meetings.getMeetings()
  }

  @Post()
  newMeeting(@Body() meeting: Meeting)
  {
    return this.meetings.setMeeting(meeting)
  }

  @Get('/:meeting')
  meetingDetails(@Param('meeting') id: number)
  {
    return this.meetings.getMeeting(id)
  }

  @Put('/:meeting')
  updateMeeting(@Param('meeting') id: number, @Body() meeting: Meeting)
  {
    return (meeting.id == id) ? this.meetings.updateMeeting(meeting) : null
  }

  @Delete('/:meeting')
  destroyMeeting(@Param('meeting') id: number)
  {
    return this.meetings.unsetMeeting(id)
  }

}
