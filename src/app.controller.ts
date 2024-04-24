import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateStatusGameDto, DataSendUpdatePointDto } from './events/dto/interface.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('dice/status')
  updateStatusGame(@Body() dto: UpdateStatusGameDto) {
    return this.appService.updateStatusGameDice(dto);
  }

  @Post('user/point')
  upPointByUser(@Body() dto: DataSendUpdatePointDto) {
    return this.appService.updatePointUser(dto);
  }
}
