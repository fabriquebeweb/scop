export class API {

  static ROOT: string = 'localhost:3000'

  static path(path: string) : string {
    return (/^\/.*/.test(path)) ? `${API.ROOT}${path}` : `${API.ROOT}/${path}`
  }

}
