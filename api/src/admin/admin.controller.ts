import { Controller, Get, Param, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {

  constructor(
    private readonly adminService: AdminService
  ) {}

  @Get()
  login() {
    return 'ADMIN'
  }

  @Get('/lol/:enterprise')
  admin(@Param('enterprise') enterprise: number) {
    return this.adminService.getEnterprise(enterprise)
  }

}
