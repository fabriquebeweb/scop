import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Meeting } from 'db/entities/Meeting.entity'
import { AdminMeetingsService } from './meetings.service'

@Controller('/meetings')
export class AdminMeetingsController {

  constructor(
    private readonly service: AdminMeetingsService
  ) {}

  @Get()
  meetingsList()
  {
    return this.service.getMeetings()
  }

  @Post()
  newMeeting( @Body() meeting: Meeting )
  {
    return this.service.setMeeting(meeting)
  }

  @Get('/:meeting')
  meetingDetails( @Param('meeting') id: number )
  {
    return this.service.getMeeting(id)
  }

  @Put('/:meeting')
  updateMeeting( @Param('meeting') id: number, @Body() meeting: Meeting )
  {
    return (meeting.id == id) ? this.service.updateMeeting(meeting) : null
  }

  @Delete('/:meeting')
  destroyMeeting( @Param('meeting') id: number )
  {
    return this.service.unsetMeeting(id)
  }

}
