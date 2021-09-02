import { Component, Input, OnInit } from '@angular/core'
import { Meeting } from '@src/app/misc/entities/Meeting'
import { Chapter } from '@src/app/misc/entities/Chapter'

@Component({
  selector: 'meeting-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingDetailsComponent implements OnInit {
  @Input() meeting: Meeting;

  showForm: boolean = false;
  toggleForm() {
    this.showForm = !this.showForm
  }
  
  chapters : Chapter[] = [
    {
      id: 1,
      title: 'titre 1',
      description: ' 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Résumé 1',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
      result: {id: 1, title: 'Pour'}
    },
    {
      id: 2,
      title: 'titre 2',
      description:  ' 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Résumé 2',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
      result: {id: 2, title: 'Contre'}
    },
    {
      id: 3,
      title: 'titre 3',
      description:  ' 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Résumé 3',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
      result: {id: 2, title: 'Contre'}
    },
    {
      id: 4,
      title: 'titre 4',
      description:  ' 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Résumé 4',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
      result: {id: 1, title: 'Pour'}
    },
    {
      id: 5,
      title: 'titre 5',
      description:  ' 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'Résumé 5',
      choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
      result: {id: 1, title: 'Pour'}
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
