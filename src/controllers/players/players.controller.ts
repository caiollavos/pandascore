import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get()
  async getPlayers(): Promise<any> {
    return await this.pandaScoreService.getPlayers();
  }
}