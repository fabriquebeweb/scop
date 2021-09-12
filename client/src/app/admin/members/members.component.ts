import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/misc/entities/User';
import { AdminMembersService } from './members.service';

@Component({
  selector: 'admin-members',
  templateUrl: './members.component.html',
})
export class AdminMembersComponent implements OnInit {

  members!: User[]

  constructor(
    private readonly service: AdminMembersService
  ) {}

  ngOnInit() : void
  {
    this.service.getMembers()
      .then(members => this.members = members)
      .catch(error => console.error(error))
  }

}
