import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { AdminService } from '@scop/api/admin/admin.service'
import { MeetingDialogDTO } from '@scop/interfaces'
import { Server, Socket } from 'socket.io'
import { EVENTS } from '@scop/globals'

@WebSocketGateway()
export class AdminGateway {

  @WebSocketServer() server: Server

  constructor(
    private readonly service: AdminService
  ){}

  @SubscribeMessage(EVENTS.ADMIN.MEETING.CHAPTER.START)
  async startVote( @MessageBody() payload: MeetingDialogDTO )
  {
    this.service.startVote()
    this.openDialog(payload)
  }

  @SubscribeMessage(EVENTS.ADMIN.MEETING.CHAPTER.END)
  async endVote( @MessageBody() payload: MeetingDialogDTO )
  {
    this.service.endVote()
    this.openDialog(payload)
  }

  async openDialog( @MessageBody() payload: MeetingDialogDTO )
  {
    this.server.emit(EVENTS.MEETING.DIALOG, payload)
  }

}
