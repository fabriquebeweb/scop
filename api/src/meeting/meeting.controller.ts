<<<<<<< HEAD
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Answer } from 'db/entities/Answer.entity'
import { Chapter } from 'db/entities/Chapter.entity'
import { get } from 'http'
import { ChapterService } from './chapter/chapter.service'
=======
import { Controller, Get, Param } from '@nestjs/common'
import { MeetingService } from './meeting.service'
>>>>>>> 4c2977c93c55a487aabbf407e2ab2fa63a6feebc

@Controller()
export class MeetingController
{
  constructor(private readonly chapterService: ChapterService){}

<<<<<<< HEAD
  // #1Liste des meetings : OK
  @Get()
  meetings() {
    return this.chapterService.getAllMeetings()
  }

  // #2Meeting selon un id : OK
  @Get('/:meeting')
  meeting(@Param('meeting') id: string) {
    console.log('id')
    return this.chapterService.getOneMeeting(id)
  }

  
  // #3La liste des chapitres : OK
  @Get('/chapters')
    allChapters() {
      return this.chapterService.getAllChapters()

    }

  // #4La liste de toutes les questions : OK
    @Get('/chapters/questions')
    allQuestions() {
      return this.chapterService.getAllQuestions()

    }

  // #5La liste des chapters d'un meeting : OK
  @Get('/:meeting/chapters')
    meetingChapters(@Param('meeting') meetingId: string) {
      return this.chapterService.getMeetingChapters(meetingId)
    }
      
  // #6 Un chapter d'un meeting : OK
  @Get('/:meeting/:chapter/chapter')
    meetingChapter(@Param('meeting') meetingId: string, @Param('chapter') chapterId: string) {
        return this.chapterService.getMeetingChapter(meetingId, chapterId)
    }
  
  // #7 Une question et ses choices pour un meeting : OK
  @Get('/:chapter/choices')
    vote(@Param('chapter') chapterId: string) {
    return this.chapterService.getAQuestion(chapterId)
  }


// #8 Persister un vote : IN PROGRESS
  @Post('/chapter/choices')
    async postVote(@Body() body: Answer){
      console.log(body);
      
      this.chapterService.saveOneVote(body)
  }
  
=======
  constructor(
    private readonly service: MeetingService
  ) {}

  @Get()
  meeting()
  {
    return 'MEETING'
  }

  @Get('/:meeting')
  getMeeting( @Param('meeting') id: number )
  {
    return this.service.getMeeting(id)
  }

  @Get('/:meeting/chapters')
  getMeetingChapters( @Param('meeting') id: number )
  {
    return this.service.getMeetingChapters(id)
  }

  @Get('/:meeting/chapter/:chapter')
  getMeetingChapter( @Param('meeting') meetingId: number, @Param('chapter') chapterId: number )
  {
    return this.service.getMeetingChapter(meetingId, chapterId)
  }
>>>>>>> 4c2977c93c55a487aabbf407e2ab2fa63a6feebc

}
