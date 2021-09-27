import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { MeetingDialogDTO } from '@scop/interfaces'
import { API, EVENTS } from '@scop/globals'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(API.CORS)
export class MeetingGateway {

  @WebSocketServer() server: Server

  @SubscribeMessage(EVENTS.MEETING.DIALOG)
  async onDialog( @ConnectedSocket() socket: Socket, @MessageBody() payload: MeetingDialogDTO )
  {
    socket.emit(EVENTS.MEETING.DIALOG, payload)
  }

}
