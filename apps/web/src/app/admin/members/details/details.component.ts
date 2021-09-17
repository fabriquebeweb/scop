import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@scop/interfaces';
import { Subscription } from 'rxjs';
import { AdminMembersService } from '../members.service';

@Component({
  selector: 'member-details',
  templateUrl: './details.component.html',
})
export class AdminMembersDetailsComponent implements OnInit, OnDestroy {

  member!: User
  observer!: Subscription

  constructor(
    public readonly service: AdminMembersService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ){}

  ngOnInit() : void
  {
    this.observer = this.route.params.subscribe(params => this.refreshMember(params.member))
  }

  ngOnDestroy() : void
  {
    this.observer.unsubscribe
  }

  //récupère l'id du member, affecte à la variable membre l'id courant
  refreshMember(id: number) : void
  {
    this.service.getMember(id)
    .then(member => this.setMember(member))
    .catch(() => this.onError())
  }

  setMember(member: User) : void
  {
    this.member = member
  }

  onError() : void
  {
    this.router.navigateByUrl('/admin/error')
  }

  updateMember()
  {
    
  }

}
