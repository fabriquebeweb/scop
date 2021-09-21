import { HttpHeaders } from '@angular/common/http'

export class API {

  static HOST: string = 'vps-6cf378a8.vps.ovh.net'
  // static HOST: string = 'localhost'
  static PORT: number = 3000
  static PREFIX: string = '/api'
  static PATH: string = `http://${API.HOST}:${API.PORT}${API.PREFIX}`
  static HEADERS: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
  })
  static OPTIONS = { headers: API.HEADERS }

}
