import { HttpHeaders } from "@angular/common/http"

export class API {

  static ROOT: string = 'localhost:3000'

  static headers(): HttpHeaders {
    return (new HttpHeaders())
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', '*')
      .set('Access-Control-Allow-Headers', '*')
  }

  static options() {
    return { headers: API.headers() }
  }

  static path(path: string) : string {
    return (/^\/.*/.test(path)) ? `${API.ROOT}${path}` : `${API.ROOT}/${path}`
  }

}
