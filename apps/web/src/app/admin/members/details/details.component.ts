import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '@scop/interfaces';
import { Subscription } from 'rxjs';
import { AdminMembersService } from '../members.service';

@Component({
  selector: 'member-details',
  templateUrl: './details.component.html',
})
export class AdminMembersDetailsComponent implements OnInit, OnDestroy {

  member!: Member
  observer!: Subscription

  constructor(
    public readonly service: AdminMembersService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.observer = this.route.params.subscribe(params => this.refreshMember(params.member))
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe
  }

  /** Mise à jour d'un membre selon son ID
   * Récupération d'un membre : utilisation de la méthode getMember
   * Si récup ok alors on appelle la méthode setmember
   * Sinon on appelle la methode onError
   * @param id
   */
  refreshMember(id: number): void {
    this.service.getMember(id)
      .then(member => this.setMember(member))
      .catch(() => this.onError())
  }

  /**
   * Affectation du member
   * @param member
   */
  setMember(member: Member): void {
    this.member = member
  }

  /**
   * Redirection vers la page erreur du router
   */
  onError(): void {
    this.router.navigateByUrl('/admin/error')
  }

  /** Mise à jour de la vue
   * Appel de la méthode put de member.service (mise à jour en bdd)
   * Puis mise à jour de la liste des membres dans la vue
   */
  updateMember() {
    this.service.resetMember(this.member)
      .then(modifiedMember => this.updateMemberList(modifiedMember))
  }

  /**
   * Mise à jour de la liste des membres: à l'index du member réaffecter par les nouvelles informations entrées par l'utilisateur
   * @param modifiedMember
   */
  updateMemberList(modifiedMember: Member): void {
    this.service.members[this.index(modifiedMember)] = modifiedMember
  }

  /**
   * Récupérer l'index du member courant dans la liste members (service)
   * Chercher la correspondance entre l'index de l'id la liste et l'id du member courant
   * @param member
   * @returns l'index de correspondance
   */
  index(member: Member): number {
    return this.service.members.findIndex(obj => obj.id == member.id)
  }

}
