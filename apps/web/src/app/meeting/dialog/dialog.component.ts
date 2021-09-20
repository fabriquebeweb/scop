import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chapter, MeetingDialogDTO } from '@scop/interfaces';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'meeting-dialog',
  templateUrl: './dialog.component.html',
})
export class MeetingDialogComponent implements OnInit {

  chapter!: Chapter

  constructor(
    private readonly ref: MatDialogRef<MeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MeetingDialogDTO,
    private readonly service: MeetingService
  ){}

  ngOnInit() : void
  {
    this.service.getMeetingChapter(this.data.chapter)
      .then(chapter => this.setChapter(chapter))
      .catch(console.log)
  }

  setChapter(chapter: Chapter) : void
  {
    this.chapter = chapter
  }

  onClose() : void
  {
    this.ref.close()
  }

}
