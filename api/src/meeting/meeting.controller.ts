import { Controller, Get, Param } from '@nestjs/common'
import { ChapterService } from './chapter/chapter.service'

@Controller()
export class MeetingController{

  constructor(
    private readonly chapterService : ChapterService
  ){}

  @Get('/:meeting')
  meeting(@Param('meeting') id: string) {
    return `id : ${id}`
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

  //Récupérer un chapitre d'un meeting
  @Get('/:meeting/:chapter/chapter')
  chapter(@Param('meeting') meetingId: string, @Param('chapter') chapterId : string){
    return this.chapterService.getMeetingChapter(meetingId, chapterId)
  }



}
