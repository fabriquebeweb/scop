import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-meeting-detail',
  templateUrl: './admin-meeting-detail.component.html',
  styleUrls: ['./admin-meeting-detail.component.css'],
})
export class AdminMeetingDetailComponent implements OnInit {
  @Input() meetingId = '';
  @Input() meetingTitle = '';
  @Input() meetingDate = '';

  constructor() {}

  ngOnInit(): void {}
}
