import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class MeetingController
{

  @Get()
  meeting(@Param('meeting') id: string) {
    return `id : ${id}`
  }

  

}
