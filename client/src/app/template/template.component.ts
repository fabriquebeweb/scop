import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  showVar: boolean = false;
  toggleChild(){
    this.showVar = !this.showVar;
  }

  chapters = [
    {
      id: 1,
      description : 'lorem',
      question: 'comment vas-tu',
      choix1: 'bien',
      choix2: 'mal'
    },
    {
      id: 2,
      description : 'lorem',
      question: 'où vas-tu',
      choix1: 'loin',
      choix2: 'proche'
    },
    {
      id: 3,
      description : 'lorem',
      question: 'qui es-tu',
      choix1: 'personne',
      choix2: 'tout le monde'
    },
    {
      id: 4,
      description : 'lorem',
      question: 'pourqoi',
      choix1: 'parce que oui',
      choix2: 'parce que non'
    },
    {
      id: 5,
      description : 'lorem',
      question: 'pourqoi',
      choix1: 'parce que oui',
      choix2: 'parce que non'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
