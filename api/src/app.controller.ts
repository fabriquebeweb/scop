import { Controller, Get, Param, Post } from '@nestjs/common'

@Controller()
export class AppController
{

  @Get()
  home() {
    return 'Hello World!'
  }

  @Post('login')
  login() {
    return 'REQUETE DE CONNEXION'
  }

}
