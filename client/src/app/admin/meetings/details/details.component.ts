import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router'
import { Meeting } from '@src/app/misc/entities/Meeting'

@Component({
  selector: 'meeting-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsDetailsComponent implements OnInit {
  meeting: Meeting = {
    id: 1,
    meetingType: {
      id: 1,
      title: 'Assemblée Générale Ordinaire',
    },
    date: new Date('2021-01-12'),
    chapters : [
      {
        id: 1,
        title: 'titre 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 1',
        choices: [
          {id: 1, title: 'Pour'},
          {id: 2, title: 'Contre'}
        ],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 2,
        title: 'titre 2',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 2',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 2, title: 'Contre'}
      },
      {
        id: 3,
        title: 'titre 3',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 3',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 2, title: 'Contre'}
      },
      {
        id: 4,
        title: 'titre 4',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 4',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 5',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 6',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 7',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 8',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 9',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 10',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
      {
        id: 5,
        title: 'titre 11',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        summary: 'Résumé 5',
        choices: [{id: 1, title: 'Pour'}, {id: 2, title: 'Contre'}],
        result: {id: 1, title: 'Pour'}
      },
    ]
  }

  showForm: boolean = false

  toggleForm() {
    this.showForm = !this.showForm
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.meeting)
  }

}
