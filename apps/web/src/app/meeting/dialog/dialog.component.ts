import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeetingDialogDTO } from '@scop/interfaces';

@Component({
  selector: 'meeting-dialog',
  templateUrl: './dialog.component.html',
})
export class MeetingDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MeetingDialogDTO
  ){}

  ngOnInit() : void
  {}

}
