import { Controller, Get, Param } from '@nestjs/common'
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

  // @Get('/:meeting/:chapter/result')
  // result(@Param('meeting') meetingId: string, @Param('chapter') chapterId : string){
  //   return `meetingId : ${meetingId} chapterId : ${chapterId}`
  // }

  @Get('/:meeting/:chapter/result')
  result(@Param('meeting') meetingId: string, @Param('chapter') chapterId : string){
    return this.chapterService.getResult(meetingId,chapterId)
  }

  // @Get('/:meeting')
  // meetings(@Param('meeting') id : string){
  //   return this.chapterService.getMeeting(id)
  // }

  // @Get('/:meeting/:chapter')
  // chapter(@Param('meeting') meetingId: string, @Param('chapter') chapterId : string){
  //   return this.chapterService.getChapter(meetingId, chapterId)
  // }

  //Requête Sidney
  @Get('/:chapter/choices')
  answer(@Param('chapter') id : string){
    return this.chapterService.getAnswer(id)
  }

  // //Récupérer un chapitre d'un meeting
  // @Get('/:meeting/:chapter/chapter')
  // chapter(@Param('meeting') meetingId: string, @Param('chapter') chapterId : string){
  //   return this.chapterService.getMeetingChapter(meetingId, chapterId)
  // }

  //Récupérer le résultat d'un vote d'un chapitre d'un meeting
  @Get('/:meeting/:chapter/chapter')
  chapter(@Param('meeting') meetingId: string, @Param('chapter') chapterId : string){
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

}
