import { Component, OnInit } from '@angular/core'
import { AdminMembersService } from './members.service'
import { User } from '@scop/interfaces'
import { Router } from '@angular/router'

@Component({
  selector: 'admin-members',
  templateUrl: './members.component.html',
})
export class AdminMembersComponent implements OnInit {

  constructor(
    public service: AdminMembersService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.service.getMembers()
      .then(members => this.setMembers(members))
      .catch(console.error)
  }

  setMembers(members: User[]) : void
  {
    this.service.members = members
    this.redirect()
  }

  onDelete(member: User) : void
  {
    this.service.unsetMember(member.id)
      .then(() => this.unsetMember(member.id))
      .catch(console.error)
  }

  unsetMember(memberId: number) : void
  {
    this.service.members = this.service.members.filter(member => member.id != memberId)
  }

  redirect() : void
  {
    this.router.navigateByUrl('/admin/members/new')
  }

}
