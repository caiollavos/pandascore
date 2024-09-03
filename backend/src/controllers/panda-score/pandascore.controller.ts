import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

@Controller('pandascore')
export class PandaScoreController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get('matches')
  async getMatches() {
    return this.pandaScoreService.getMatches();
  }
}