import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { AdminMeetingsService } from '@scop/api/admin/meetings/meetings.service'
import { MeetingDialogDTO } from '@scop/interfaces'
import { Server, Socket } from 'socket.io'
import { EVENTS } from '@scop/globals'

@WebSocketGateway()
export class AdminMeetingsGateway {

  @WebSocketServer() server: Server

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  @SubscribeMessage(EVENTS.ADMIN.MEETING.CHAPTER.START)
  async startVote( @MessageBody() payload: MeetingDialogDTO )
  {
    this.openDialog({ chapter: (await this.service.startVote(payload.chapter)).id })
  }

  @SubscribeMessage(EVENTS.ADMIN.MEETING.CHAPTER.END)
  async endVote( @MessageBody() payload: MeetingDialogDTO )
  {
    this.openDialog({ chapter: (await this.service.endVote(payload.chapter)).id })
  }

  async openDialog( @MessageBody() payload: MeetingDialogDTO )
  {
    this.server.emit(EVENTS.MEETING.DIALOG, payload)
  }

}
