import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'
import { Meeting } from 'db/entities/Meeting.entity'
import { AdminMeetingsService } from './meetings.service'

@Controller('/meetings')
export class AdminMeetingsController {

  constructor(
    private readonly meetingsService: AdminMeetingsService
  ) {}

  @Get()
  meetingList() {
    return this.meetingsService.getAllMeetings()
  }

  @Get('/:meeting')
  meetingDetails(@Param('meeting') meetingId: number) {
    return this.meetingsService.getOneMeeting(meetingId)
  }

  @Post()
  newMeeting(@Body() meeting: Meeting) {
    this.meetingsService.saveOneMeeting(meeting)
  }

  @Get('/test')
  meetingTest() {
    this.meetingsService.test()
    return true
  }

}
