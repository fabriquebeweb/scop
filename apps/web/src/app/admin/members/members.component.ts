import { Component, OnInit } from '@angular/core'
import { AdminMembersService } from './members.service'
import { User } from '@scop/interfaces'

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

  onDelete(member: User) : void
  {
    this.service.unsetMember(member.id)
      .then(() => this.unsetMember(member.id))
      .catch(console.log)
  }

  unsetMember(memberId: number) : void
  {
    this.members = this.members.filter(member => member.id != memberId)
  }

}
