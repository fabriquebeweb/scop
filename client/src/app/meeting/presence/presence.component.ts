import { Component, OnInit } from '@angular/core'
import { Chapter } from '../../misc/entities/Chapter'

@Component({
  selector: 'meeting-presence',
  templateUrl: './presence.component.html'
})
export class MeetingPresenceComponent implements OnInit {

  chapters : Chapter[] =
  [
    {
      id: 1,
      title: 'titre 1',
      description: ' 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Sujet du vote 1',
      question: 'Êtes-vous pour ou contre la réforme ?',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'},{id: 3, title: 'Je m\'abstiens'}],
      result: {id: 1, title: 'Pour'}
    },
    {
      id: 2,
      title: 'titre 2',
      description:  ' 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Sujet du vote 2',
      question: 'Êtes-vous pour ou contre la réforme ?',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'},{id: 3, title: 'Je m\'abstiens'}],
      result: {id: 2, title: 'Contre'}
    },
    {
      id: 3,
      title: 'titre 3',
      description:  ' 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Sujet du vote 3',
      question: 'Êtes-vous pour ou contre la réforme ?',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'},{id: 3, title: 'Je m\'abstiens'}],
      result: {id: 2, title: 'Contre'}
    },
    {
      id: 4,
      title: 'titre 4',
      description:  ' 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Sujet du vote 4',
      question: 'Êtes-vous pour ou contre la réforme ?',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'},{id: 3, title: 'Je m\'abstiens'}],
      result: {id: 1, title: 'Pour'}
    },
    {
      id: 5,
      title: 'titre 5',
      description:  ' 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Sujet du vote 5',
      question: 'Êtes-vous pour ou contre la réforme ?',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'},{id: 3, title: 'Je m\'abstiens'}],
      result: {id: 1, title: 'Pour'}
    },
  ]

  constructor() {}

  ngOnInit() : void
  {}

}
