import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-meetings-element',
  templateUrl: './admin-meetings-element.component.html',
  styleUrls: ['./admin-meetings-element.component.css'],
})
export class AdminMeetingsElementComponent implements OnInit {
  @Input() meetingId = '';
  @Input() meetingTitle = '';
  @Input() meetingDate = '';

  constructor() {}

  ngOnInit(): void {}
}
