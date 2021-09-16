import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@scop/interfaces';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'web-memberdetails',
  templateUrl: './memberdetails.component.html',

})
export class MemberdetailsComponent implements OnInit {

  @Input() member!: User
  constructor() { }

  ngOnInit(): void {
  }

 

}
