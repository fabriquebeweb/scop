import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { AdminService } from '@scop/api/admin/admin.service'
import { Choice } from '@scop/entities'

@Controller()
export class AdminController {

  constructor(
    private readonly service: AdminService
  ){}

  @Get('login')
  login()
  {}

  @Post('/choices')
  newChoice( @Body() choice: Choice )
  {
    return this.service.setChoice(choice)
  }

  @Get('/choices/:choice')
  getChoice( @Param('choice') choiceId: number )
  {
    return this.service.getChoice(choiceId)
  }

}
