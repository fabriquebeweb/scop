import { Component, OnInit } from '@angular/core'
import { Chapter } from '@scop/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'meeting-presence',
  templateUrl: './presence.component.html'
})
export class MeetingPresenceComponent implements OnInit {

  chapters!: Chapter[]

  constructor(
    private dialog: MatDialog
  ){}

  ngOnInit() : void
  {}

}
