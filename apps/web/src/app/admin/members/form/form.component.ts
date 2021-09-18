import { Component, Input, OnInit } from '@angular/core';
import { NewUserDTO, User } from '@scop/interfaces';
import { InsertResult } from 'typeorm';
import { AdminMembersService } from '../members.service';

@Component({
  selector: 'member-form',
  templateUrl: './form.component.html',
})
export class AdminMembersFormComponent implements OnInit {
  
  member: NewUserDTO = {
    firstName: undefined,
    lastName: undefined,
    email:  undefined,
    enterprise: 1
  }
 
  constructor(public readonly service: AdminMembersService,){}

  ngOnInit() : void
  {}

  addMember() : void
  {
    this.service.setNewMember(this.member)
    .then(insertMember => this.onsave(insertMember))
    .catch(console.log)
  }

  onsave(insertMember: InsertResult) : void
  {
    this.service.getMember(insertMember.raw)
    .then(member => this.service.members.push(member))
    .catch(console.log)
  }

  deletion() : void
  {
    this.member = {
      firstName: undefined,
      lastName: undefined,
      email:  undefined,
      enterprise: 1
    }
  }
  
}
