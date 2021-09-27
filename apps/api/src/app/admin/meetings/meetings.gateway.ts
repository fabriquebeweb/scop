import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { AdminMeetingsService } from '@scop/api/admin/meetings/meetings.service'
import { ChoiceOptionDTO, MeetingDialogDTO } from '@scop/interfaces'
import { API, EVENTS } from '@scop/globals'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(API.CORS)
export class AdminMeetingsGateway {

  @WebSocketServer() server: Server

  constructor(
    private readonly service: AdminMeetingsService
  ){}

  @SubscribeMessage(EVENTS.ADMIN.CHAPTER.START)
  async startVote( @MessageBody() payload: MeetingDialogDTO )
  {
    this.openDialog({ question: ( await this.service.startVote(payload.question) ).id })
  }

  @SubscribeMessage(EVENTS.ADMIN.CHAPTER.END)
  async endVote( @MessageBody() payload: MeetingDialogDTO )
  {
    this.openDialog({ question: ( await this.service.endVote(payload.question) ).id })
  }

  @SubscribeMessage(EVENTS.ADMIN.CHOICE.TMP)
  async choiceOptions( @ConnectedSocket() socket: Socket, @MessageBody() payload: ChoiceOptionDTO )
  {
    socket.emit(EVENTS.ADMIN.CHOICE.OPTIONS, await this.service.getChoiceOptions(payload))
  }

  async openDialog( payload: MeetingDialogDTO )
  {
    this.server.emit(EVENTS.MEETING.DIALOG, payload)
  }

}
