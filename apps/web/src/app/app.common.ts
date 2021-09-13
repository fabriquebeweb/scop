import { HttpHeaders } from "@angular/common/http"

export class API {

  static ROOT: string = 'http://vps-6cf378a8.vps.ovh.net:3000/api'

  static headers() : HttpHeaders
  {
    return (new HttpHeaders())
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', '*')
      .set('Access-Control-Allow-Headers', '*')
  }

  static options() : { headers: HttpHeaders }
  {
    return { headers: API.headers() }
  }

  static path(path: string) : string
  {
    return (/^\/.*/.test(path)) ? `${API.ROOT}${path}` : `${API.ROOT}/${path}`
  }

}
