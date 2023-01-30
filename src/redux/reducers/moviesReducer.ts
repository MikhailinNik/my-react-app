import { Movie } from './../../db';
import { MovieState } from './types';
import {
	SET_MOVIES,
	SORT_BY_POPULARITY_ASC,
	SORT_BY_POPULARITY_DESC,
	SORT_BY_RATE_DESC,
	SORT_BY_RATE_ASC,
	SORT_BY_YEAR,
	SORT_BY_GENRE,
	SELECT_BY_ID,
	SORT_SELECTED_IDS,
	SORT_BY_GENRE_RANDOM,
	SORT_BY_VOTE_MORE,
	SORT_BY_VOTE_LESS,
	SORT_POPULARITY_ASC,
	SORT_POPULARITY_DESC,
	RANDOM_MOVIE,
} from '../actions';

const initialState = {
	listMovies: [],
	selectedGenres: [],
	movie: null,
} as MovieState;

export function movie(state = initialState, { type, payload }: any) {
	switch (type) {
		case SET_MOVIES:
			return { ...state, listMovies: payload };

		case SORT_BY_POPULARITY_DESC:
			const popularityDesc = payload.sort((a: Movie, b: Movie) => b.popularity - a.popularity);

			return { ...state, listMovies: popularityDesc };

		case SORT_BY_POPULARITY_ASC:
			const popularityAsc = payload.sort((a: Movie, b: Movie) => a.popularity - b.popularity);

			return { ...state, listMovies: popularityAsc };

		case SORT_BY_RATE_DESC:
			const voteAverageDesc = payload.sort((a: Movie, b: Movie) => {
				return b.vote_average * 10 - a.vote_average * 10;
			});

			return { ...state, listMovies: voteAverageDesc };

		case SORT_BY_RATE_ASC:
			const voteAverageAsc = payload.sort((a: Movie, b: Movie) => {
				return a.vote_average * 10 - b.vote_average * 10;
			});

			return { ...state, listMovies: voteAverageAsc };

		case SORT_BY_YEAR:
			const sortListByYear: Movie[] = [];

			state.listMovies.forEach((obj: Movie) => {
				const date = obj.release_date.slice(0, 4);
				if (date === payload) {
					return sortListByYear.push(obj);
				}
			});

			return { ...state, listMovies: sortListByYear };

		case SORT_BY_GENRE:
			const sortListByGenre = state.listMovies.filter((obj: Movie) => {
				return state.selectedGenres.every((id: number) => obj.genre_ids.includes(id));
			});

			return { ...state, listMovies: sortListByGenre };

		case SELECT_BY_ID:
			const newListSelectedGenre = [...state.selectedGenres, payload];

			return { ...state, selectedGenres: newListSelectedGenre };

		case SORT_SELECTED_IDS:
			const newListSelectedIds = state.selectedGenres.filter((id: number) => id !== payload);

			return { ...state, selectedGenres: newListSelectedIds };

		case SORT_BY_GENRE_RANDOM:
			const listGenre = state.listMovies.filter((movie: Movie) =>
				movie.genre_ids.includes(payload),
			);

			return { ...state, listMovies: listGenre };

		case SORT_BY_VOTE_MORE:
			const newListVoted = state.listMovies.filter((movie: Movie) => movie.vote_average > payload);

			return { ...state, listMovies: newListVoted };

		case SORT_BY_VOTE_LESS:
			const newListVoteLess = state.listMovies.filter(
				(movie: Movie) => movie.vote_average < payload,
			);

			return { ...state, listMovies: newListVoteLess };

		case SORT_POPULARITY_DESC:
			const sortPopDesc = state.listMovies.filter((movie: Movie) => movie.popularity > payload);

			return { ...state, listMovies: sortPopDesc };

		case SORT_POPULARITY_ASC:
			const sortPopAsc = state.listMovies.filter((movie: Movie) => movie.popularity < payload);

			return { ...state, listMovies: sortPopAsc };

		case RANDOM_MOVIE:
			const randomMovie = state.listMovies[Math.floor(Math.random() * state.listMovies.length)];

			return { ...state, movie: randomMovie };
		default:
			return state;
	}
}
