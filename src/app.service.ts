import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';
import { DataSendUpdatePointDto, UpdateStatusGameDto } from './events/dto/interface.dto';

@Injectable()
export class AppService {
  constructor(private readonly eventsGateway: EventsGateway) {}

  async updateStatusGameDice(dto: UpdateStatusGameDto) {
    return this.eventsGateway.updateStatusGameDice(dto);
  }

  async updatePointUser(dto: DataSendUpdatePointDto) {
    return this.eventsGateway.updatePointUser(dto);
  }
}
