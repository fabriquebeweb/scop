import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { AdminMeetingsService } from './meetings.service'
import { MeetingEntity } from '@scop/entities'

@Controller('/meetings')
export class AdminMeetingsController {

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  @Get()
  getMeetings()
  {
    return this.service.getMeetings()
  }

  @Post()
  newMeeting( @Body() meeting: MeetingEntity )
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
  updateMeeting( @Param('meeting') id: number, @Body() meeting: MeetingEntity )
  {
    return (meeting.id == id) ? this.service.resetMeeting(meeting) : null
  }

  @Delete('/:meeting')
  deleteMeeting( @Param('meeting') id: number )
  {
    return this.service.unsetMeeting(id)
  }

}
