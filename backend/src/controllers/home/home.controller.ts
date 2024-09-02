import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/pandascore/pandascore.service';

@Controller('home')
export class HomeController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get()
  async getMatches() {
    return this.pandaScoreService.getMatches();
  }
}