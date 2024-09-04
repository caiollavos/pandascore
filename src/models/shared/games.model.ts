export interface IGame {
    begin_at: string;
    complete: boolean,
    detailed_stats: boolean;
    end_at: string;
    finished: boolean;
    forfeit: boolean;
    id: number;
    length: number | string;
    match_id: number;
    position: number;
    status: string;
    winner: IGameWinner;
    winner_type: string;
}

export interface IGameWinner {
    id: number;
    type: string;
}