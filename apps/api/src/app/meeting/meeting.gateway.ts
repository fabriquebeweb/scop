import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { MeetingDialogDTO } from '@scop/interfaces'
import { Server, Socket } from 'socket.io'
import { EVENTS } from '@scop/globals'

@WebSocketGateway()
export class MeetingGateway {

  @WebSocketServer() server: Server

  @SubscribeMessage(EVENTS.MEETING.DIALOG)
  async onDialog( @ConnectedSocket() socket: Socket, @MessageBody() payload: MeetingDialogDTO )
  {
    socket.emit(EVENTS.MEETING.DIALOG, payload)
  }

}
