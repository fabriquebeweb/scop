import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-meetings',
  templateUrl: './admin-meetings.component.html',
  styleUrls: ['./admin-meetings.component.css'],
})
export class AdminMeetingsComponent implements OnInit {
  meetings = [
    {
      id: 1,
      title: 'Assemblée Générale Ordinaire',
      date: '12 JAN 2021',
    },
    {
      id: 2,
      title: 'Assemblée Générale Extraordinaire',
      date: '12 JUIN 2021',
    },
    {
      id: 3,
      title: 'Réunion',
      date: '17 JUIN 2021',
    },
    {
      id: 4,
      title: "Conseil d'administration",
      date: '22 AOUT 2021',
    },
    {
      id: 5,
      title: 'Réunion',
      date: '1 SEPT 2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
