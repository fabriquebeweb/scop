import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { AdminMembersService } from './members.service'
import { User } from '@scop/entities'

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

  @Get('/:member')
  member( @Param('member') id: number )
  {
    return this.service.getMember(id)
  }

  @Post()
  newMember( @Body() member: User )
  {
    return this.service.newMember(member)
  }

  @Put()
  updateMember( @Body() member: User )
  {
    return this.service.updateMember(member)
  }

  @Delete('/:member')
  deleteMember( @Param('member') id: number )
  {
    return this.service.deleteMember(id)
  }

}
