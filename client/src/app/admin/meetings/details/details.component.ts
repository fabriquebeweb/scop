import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Meeting } from 'src/app/misc/entities/Meeting'
import { Subscription } from 'rxjs'
import { AdminMeetingsService } from '../meetings.service'
import { HttpClient } from '@angular/common/http'
import { API } from 'src/app/app.common'

@Component({
  selector: 'meeting-details',
  templateUrl: './details.component.html'
})
export class AdminMeetingsDetailsComponent implements OnInit, OnDestroy {
  observer!: Subscription
  meeting: Meeting = {
    id: 1,
    meetingType: {
      id: 1,
      title: 'Assemblée Générale Ordinaire',
    },
    date: new Date('2021-01-12'),
    chapters: [
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


  constructor(
    private readonly service: AdminMeetingsService,
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.observer = this.route.params.subscribe(params => {
      this.service.getMeeting(params.meeting)
        // .then(response => this.meeting = response)
        .then(response => console.log(response))
        // .catch(() => this.router.navigate(['/error']))
    })
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe()
  }

}
