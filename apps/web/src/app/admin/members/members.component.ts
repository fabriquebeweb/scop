import { AdminMembersService } from '@scop/web/admin/members/members.service'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Member } from '@scop/interfaces'

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

  setMembers(members: Member[]) : void
  {
    this.service.members = members
    this.redirect()
  }

  onDelete(member: Member) : void
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
