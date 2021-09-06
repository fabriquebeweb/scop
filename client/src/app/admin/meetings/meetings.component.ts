import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Meeting } from 'src/app/misc/entities/Meeting'
import { AdminMeetingsService } from './meetings.service'

@Component({
  selector: 'admin-meetings',
  templateUrl: './meetings.component.html',
})
export class AdminMeetingsComponent implements OnInit {

  // observer!: Subscription
  meetings!: Meeting[]

  // meetings: Meeting[] = [
  //   {
  //     id: 1,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 2,
  //     meetingType: {
  //       id: 2,
  //       title: 'Assemblée Générale Extraordinaire',
  //     },
  //     date: new Date('2021-06-12'),
  //   },
  //   {
  //     id: 3,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-06-17'),
  //   },
  //   {
  //     id: 4,
  //     meetingType: {
  //       id: 4,
  //       title: "Conseil d'Administration",
  //     },
  //     date: new Date('2021-08-22'),
  //   },
  //   {
  //     id: 5,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  //   {
  //     id: 6,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  //   {
  //     id: 7,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  //   {
  //     id: 8,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  //   {
  //     id: 9,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  //   {
  //     id: 10,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  //   {
  //     id: 11,
  //     meetingType: {
  //       id: 3,
  //       title: 'Réunion',
  //     },
  //     date: new Date('2021-09-01'),
  //   },
  // ]

  constructor(
    private readonly service: AdminMeetingsService,
    private readonly router: Router
  ) {}

  ngOnInit() : void
  {
    this.service.getMeetingsSummary()
      .then(meetings => { (meetings) ? this.meetings = meetings : this.router.navigate(['/admin/meetings/new']) })
      .catch(() => this.router.navigate(['/error']))
  }

}
