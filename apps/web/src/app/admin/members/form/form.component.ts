import { Component, OnInit } from '@angular/core'
import { NewMemberDTO } from '@scop/interfaces'
import { InsertResult } from 'typeorm';
import { AdminMembersService } from '../members.service';

@Component({
  selector: 'member-form',
  templateUrl: './form.component.html',
})
export class AdminMembersFormComponent implements OnInit {

  member: NewMemberDTO = {
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
    .then(insertMember => this.onSave(insertMember))
    .catch(console.log)
  }

  onSave(insertMember: InsertResult) : void
  {
    this.service.getMember(insertMember.raw)
    .then(member => this.service.members.push(member))
    .catch(console.log)
    this.onDelete()
  }

  onDelete() : void
  {
    this.member = {
      firstName: undefined,
      lastName: undefined,
      email:  undefined,
      enterprise: 1
    }
  }

}
