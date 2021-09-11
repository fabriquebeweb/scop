import { Controller, Get } from '@nestjs/common';
import { AdminMembersService } from './members.service';

@Controller('members')
export class AdminMembersController {

  constructor(
    private readonly service: AdminMembersService
  ){}

  @Get()
  members()
  {
    return this.service.getMembers()
  }

}
