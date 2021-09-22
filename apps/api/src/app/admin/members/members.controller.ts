import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { AdminMembersService } from '@scop/api/admin/members/members.service'
import { Member } from '@scop/entities'

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

  @Post()
  newMember( @Body() member: Member )
  {
    return this.service.newMember(member)
  }

  @Get('/:member')
  member( @Param('member') id: number )
  {
    return this.service.getMember(id)
  }

  @Put('/:member')
  updateMember( @Body() member: Member )
  {
    return this.service.updateMember(member)
  }

  @Delete('/:member')
  deleteMember( @Param('member') id: number )
  {
    return this.service.deleteMember(id)
  }

}
