import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { BeforeApplicationShutdown } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Server, Socket } from 'socket.io';
import { EventService } from './event.service';
import { DataJoinRoom, DataSendMessage, UpdateStatusGameDto } from './dto/interface.dto';
import { TypeEmitMessage } from 'src/constants';

@WebSocketGateway({
  allowEIO3: true,
  transports: ['websocket'],
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, BeforeApplicationShutdown {
  constructor(private readonly eventService: EventService) {}

  @WebSocketServer()
  server: Server;

  bufferObject(data: object) {
    const myString = JSON.stringify(data);
    const myBuffer = Buffer.from(myString, 'utf-8');
    return myBuffer;
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('🚀 ~ file: events.gateway.ts:18 ~ handleConnection ~ client:');
  }

  handleDisconnect(client: Socket) {
    // return this.eventService.handleClientDisconnect(client);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('ÔKKK');
    // return this.eventService.handleApplicationShutdown();
  }

  afterInit(server: Server) {
    // Đây là nơi bạn có thể thực hiện các công việc cần thiết sau khi Gateway đã sẵn sàng
    console.log('WebSocket Gateway initialized');
  }

  @SubscribeMessage('join-room')
  joinRoom(@MessageBody() data: DataJoinRoom, @ConnectedSocket() client: Socket) {
    return this.eventService.handleJoinRoom(data, client);
  }

  updateStatusGameDice(dto: UpdateStatusGameDto) {
    const dataRes = this.bufferObject({
      type: TypeEmitMessage.updateStatusDice,
      ...dto,
    });

    this.server.emit('data', dataRes);
  }

  @SubscribeMessage('leave-room')
  leaveRoom(@MessageBody() data: DataJoinRoom, @ConnectedSocket() client: Socket) {
    // return this.eventService.handleLeaveRoom(data, client);
  }
}
