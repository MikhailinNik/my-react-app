import { Movie } from './../../db';

export interface MovieState {
	listMovies: Movie[];
	selectedGenres: number[];
}
