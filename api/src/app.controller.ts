import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getAll() {
    return this.appService.getAll()
  }

  @Get(':id')
  set(@Param('id') id: string) {
    this.appService.set(id)
    return `${id} is saved`
  }
}
