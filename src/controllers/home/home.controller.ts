import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';
import { IMatch } from 'src/models/matches/match.model';

@Controller('home')
export class HomeController {
  constructor(private readonly pandaScoreService: PandaScoreService) { }

  @Get()
  async getMatches(): Promise<Array<IMatch>> {
    return await this.pandaScoreService.getMatches();
  }
}