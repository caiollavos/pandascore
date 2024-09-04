export interface IOpponent {
    opponent: IOpponentItem,
    type: string;
}
export interface IOpponentItem {
    acronym: string;
    id: number;
    image_url: string;
    location: string;
    modified_at: string;
    name: string;
    slug: string;
}