import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { EVENTS } from '@scop/globals'
import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class MeetingGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server

  async handleConnection()
  {}

  async handleDisconnect()
  {}

  @SubscribeMessage(EVENTS.MEETING.DIALOG)
  async onDialog( @ConnectedSocket() socket: Socket, @MessageBody() payload: any )
  {
    this.server.emit(EVENTS.MEETING.DIALOG, payload)
  }

}
