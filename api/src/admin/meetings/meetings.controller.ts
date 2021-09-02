import { Controller, Get } from '@nestjs/common'

@Controller()
export class AdminMeetingsController {

  @Get()
  adminMeeting() {
    return "ADMIN MEETING"
  }

}
