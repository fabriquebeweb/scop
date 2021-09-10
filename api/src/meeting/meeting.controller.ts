import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Answer } from 'db/entities/Answer.entity'
import { Chapter } from 'db/entities/Chapter.entity'
import { ChapterService } from './chapter/chapter.service'
import { MeetingService } from './meeting.service'

@Controller()
export class MeetingController{

  constructor(
    private readonly chapterService : ChapterService,
    private readonly service: MeetingService
  ){}

  @Get('/:meeting')
  getMeeting( @Param('meeting') id: number )
  {
    return this.service.getMeeting(id)
  }

  // Requête Sidney
  @Get('/:chapter/choices')
  answer(@Param('chapter') id : string){
    return this.chapterService.getAnswer(id)
  }

  //Récupérer le résultat d'un vote d'un chapitre d'un meeting
  @Get('/:meeting/chapter/:chapter/results')
  chapter(@Param('meeting') meetingId: number, @Param('chapter') chapterId : number)
  {
    return this.chapterService.getMeetingChapterResult(meetingId, chapterId)
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

  // Une question et ses choices pour un meeting : OK
  @Get('/:chapter/choices')
  getChapterChoices( @Param('chapter') chapterId: number )
  {
    return this.chapterService.getAQuestion(chapterId)
  }

  // Persister un vote : IN PROGRESS
  @Post('/chapter/choices')
  async postVote(@Body() body: Answer)
  {  
    this.chapterService.saveOneVote(body)
  }

}
