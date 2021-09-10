import { Controller, Get, Post } from '@nestjs/common'

@Controller()
export class AppController
{

  @Get()
  home()
  {
    return null
  }

  @Post('login')
  login()
  {
    return 'REQUETE DE CONNEXION'
  }

}
