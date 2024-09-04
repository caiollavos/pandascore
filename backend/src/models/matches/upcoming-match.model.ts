import { IGame } from "../shared/games.model"
import { ILeague } from "../shared/league.model";
import { ILive } from "../shared/live.model";
import { IOpponent } from "../shared/opponent.model";
import { IResult } from "../shared/results.model";
import { ISerie } from "../shared/serie.model";
import { IStream } from "../shared/stream.model";
import { IVideoGame, IVideoGameTitle } from "../shared/video-game.model";

export interface IUpcomingMatch {

    begin_at: string;
    detailed_stats: true;
    draw: boolean;
    end_at: string;
    forfeit: boolean;
    game_advantage: null;
    games: Array<IGame>;
    id: number;
    league: ILeague;
    league_id: number;
    live: ILive;
    map_picks: null;
    match_type: string;
    modified_at: string;
    name: string;
    number_of_games: number;
    opponents: Array<IOpponent>;
    original_scheduled_at: string;
    rescheduled: false;
    results: Array<IResult>;
    scheduled_at: string;
    serie: ISerie;
    serie_id: number;
    slug: string;
    status: string;
    streams_list: Array<IStream>;
    tournament: IStream;
    tournament_id: number;
    videogame: IVideoGame;
    videogame_title: IVideoGameTitle;
    videogame_version: null;
    winner: null;
    winner_id: number;
    winner_type: string;
}