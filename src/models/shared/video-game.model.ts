export interface IVideoGame {
	id: number;
	name: string;
	slug: string;
}

export interface IVideoGameTitle {
	id: number;
	name: string;
	slug: string;
	videogame_id: number;
}

export interface IVideoGameVersion {
	current: boolean;
	name: string;
}