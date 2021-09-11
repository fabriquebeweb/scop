import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/app.common';
import { User } from 'src/app/misc/entities/User';

@Injectable()
export class AdminMembersService {

  constructor(
    private readonly http: HttpClient
  ){}

  async getMembers() : Promise<User[]>
  {
    return await this.http.get<User[]>(API.path(''), API.options()).toPromise()
  }

}
