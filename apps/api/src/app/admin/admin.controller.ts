import { Controller, Get } from '@nestjs/common'
import { AdminService } from '@scop/api/admin/admin.service'

@Controller()
export class AdminController {

  constructor(
    private readonly service: AdminService
  ){}

  @Get('login')
  login()
  {}

}
