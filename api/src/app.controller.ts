import { Controller, Get, Param, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('reunion')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  home() {
    return this.appService.getAllEnterprises()
  }

  @Get(':id')
  newEnterprise(@Param('id') id: string) {
    this.appService.set(id)
    return `${id} is saved`
  }
}
