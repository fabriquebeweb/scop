import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html'
})
export class LolComponent implements OnInit {
  message = "lolilol"

  constructor() { }

  ngOnInit(): void {
  }

}
