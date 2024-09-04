import { IGame } from "../shared/games.model";
import { ILeague } from "../shared/league.model";
import { ILive } from "../shared/live.model";
import { IOpponent } from "../shared/opponent.model";
import { IResult } from "../shared/results.model";
import { ISerie } from "../shared/serie.model";
import { IStream } from "../shared/stream.model";
import { ITournament } from "../shared/tournament.model";
import { IVideoGame } from "../shared/video-game.model";

export interface IMatch {
	match_type: string;
	serie_id: number;
	winner_id: number;
	status: string;
	begin_at: string;
	rescheduled: boolean;
	videogame_title: string;
	slug: string;
	league: Array<ILeague>;
	videogame_version: string;
	id: number;
	serie: ISerie;
	name: string;
	videogame: IVideoGame;
	detailed_stats: boolean,
	modified_at: string;
	game_advantage: string;
	number_of_games: number;
	tournament: ITournament
	forfeit: boolean;
	end_at: string;
	draw: boolean;
	results: Array<IResult>,
	games: Array<IGame>,
	live: ILive;
	opponents: Array<IOpponent>,
	scheduled_at: string;
	league_id: number;
	winner: number | string;
	original_scheduled_at: string;
	winner_type: string;
	streams_list: Array<IStream>,
	tournament_id: number;
}
