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
      data: '12 JAN 2021',
    },
    {
      id: 2,
      title: 'Assemblée Générale Extraordinaire',
      data: '12 JUIN 2021',
    },
    {
      id: 3,
      title: 'Réunion',
      data: '17 JUIN 2021',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
