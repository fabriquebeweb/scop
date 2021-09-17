import { Component, OnInit } from '@angular/core';
import { User } from '@scop/interfaces';
import { AdminMembersService } from '../members.service';

@Component({
  selector: 'member-form',
  templateUrl: './form.component.html',
})
export class AdminMembersFormComponent implements OnInit {
  member!: User
  constructor(public readonly service: AdminMembersService,){}

  ngOnInit() : void
  {}

  addMember()
  {
    this.service.setNewMember(this.member)
      .then(member => console.log(this.member))
      .catch(() => console.log("erreur")) //this.onError())
  }
  

}
