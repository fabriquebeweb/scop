import { Module } from '@nestjs/common'
import { MeetingController } from './meeting.controller'
import { ChapterService } from './chapter/chapter.service';

@Module({
  imports: [],
  controllers: [
    MeetingController
  ],
  providers: [ChapterService]
})
export class MeetingModule {}
