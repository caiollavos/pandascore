export interface ITournament {
    begin_at: string;
    detailed_stats: boolean;
    end_at: string;
    has_bracket: boolean;
    id: number;
    league_id: number;
    live_supported: boolean;
    modified_at: string;
    name: string;
    prizepool: null;
    serie_id: number;
    slug: string;
    tier: string;
    winner_id: number;
    winner_type: string;
}