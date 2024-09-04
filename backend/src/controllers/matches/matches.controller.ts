import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';
import { IMatch } from 'src/models/matches/match.model';
import { IUpcomingMatch } from 'src/models/matches/upcoming-match.model';

@Controller('matches')
export class MatchesController {
  constructor(private readonly pandaScoreService: PandaScoreService) { }

  @Get()
  async getMatches(): Promise<Array<IMatch>> {
    return await this.pandaScoreService.getMatches();
  }

  @Get('upcoming')
  async getUpcomingMatches(): Promise<Array<IUpcomingMatch>> {
    return await this.pandaScoreService.getUpcomingMatches();
  }
}