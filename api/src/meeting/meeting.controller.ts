import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Answer } from 'db/entities/Answer.entity'
import { Chapter } from 'db/entities/Chapter.entity'
import { get } from 'http'
import { ChapterService } from './chapter/chapter.service'

@Controller()
export class MeetingController
{
  constructor(private readonly chapterService: ChapterService){}

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
  @Post('/:chapter/choices')
    async postVote(@Body() body: Answer, @Param('chapter') chapterId: string) {
      this.chapterService.saveOneVote(body)
  }
  

}
