import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IMatch } from 'src/models/matches/match.model';
import { IUpcomingMatch } from 'src/models/matches/upcoming-match.model';

@Injectable()
export class PandaScoreService {
  constructor(private readonly httpService: HttpService) {}

  async getMatches(): Promise<Array<IMatch>> {
    const response = await firstValueFrom(
      this.httpService.get('https://api.pandascore.co/matches', {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }

  async getPlayers(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get('https://api.pandascore.co/players', {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }

  async getUpcomingMatches(): Promise<Array<IUpcomingMatch>> {
    const response = await firstValueFrom(
      this.httpService.get('https://api.pandascore.co/matches/upcoming', {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }
}