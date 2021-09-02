import { Component, OnInit } from '@angular/core'
import { Meeting } from '@src/app/misc/entities/Meeting'

@Component({
  selector: 'admin-meetings',
  templateUrl: './meetings.component.html'
})
export class AdminMeetingsComponent implements OnInit {
  meetings: Meeting[] = [
    {
      id: 1,
      meetingType: {
        id: 1,
        title: 'Assemblée Générale Ordinaire'
      },
      date: new Date('2021-01-12')
    },
    {
      id: 2,
      meetingType: {
        id: 2,
        title: 'Assemblée Générale Extraordinaire'
      },
      date: new Date('2021-06-12')
    },
    {
      id: 3,
      meetingType: {
        id: 3,
        title: 'Réunion'
      },
      date: new Date('2021-06-17')
    },
    {
      id: 4,
      meetingType: {
        id: 4,
        title: 'Conseil d\'Administration'
      },
      date: new Date('2021-08-22')
    },
    {
      id: 5,
      meetingType: {
        id: 3,
        title: 'Réunion'
      },
      date: new Date('2021-09-01')
    }
  ]

  constructor() {}

  ngOnInit(): void { }
}
