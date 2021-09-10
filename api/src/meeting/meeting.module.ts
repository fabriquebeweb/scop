import { Module } from '@nestjs/common'
import { MeetingController } from './meeting.controller'
import { ChapterService } from './chapter/chapter.service';
import { MeetingService } from './meeting.service';

@Module({
  imports: [],
  controllers: [
    MeetingController
  ],
  providers: [
    MeetingService,
    ChapterService
  ]
})
export class MeetingModule {}
