import { Controller, Get } from '@nestjs/common'

@Controller('meetings')
export class AdminMeetingsController {

  @Get()
  adminMeeting() {
    return "ADMIN MEETING"
  }

}
