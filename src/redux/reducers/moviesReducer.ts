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
} from '../actions';

interface moviesState {
	listMovies: [];
}

const initialState = {
	listMovies: [],
	selectedGenres: [],
} as moviesState;

export function movie(state = initialState, { type, payload }: any) {
	switch (type) {
		case SET_MOVIES:
			return { ...state, listMovies: payload };

		case SORT_BY_POPULARITY_DESC:
			const popularityDesc = payload.sort((a, b) => b.popularity - a.popularity);

			return { ...state, listMovies: popularityDesc };

		case SORT_BY_POPULARITY_ASC:
			const popularityAsc = payload.sort((a, b) => a.popularity - b.popularity);

			return { ...state, listMovies: popularityAsc };

		case SORT_BY_RATE_DESC:
			const voteAverageDesc = payload.sort((a, b) => {
				return b.vote_average * 10 - a.vote_average * 10;
			});

			return { ...state, listMovies: voteAverageDesc };

		case SORT_BY_RATE_ASC:
			const voteAverageAsc = payload.sort((a, b) => {
				return a.vote_average * 10 - b.vote_average * 10;
			});

			return { ...state, listMovies: voteAverageAsc };

		case SORT_BY_YEAR:
			const sortListByYear: [] = [];
			state.listMovies.forEach(obj => {
				const date = obj.release_date.slice(0, 4);
				if (date === payload) {
					return sortListByYear.push(obj);
				}
			});

			return { ...state, listMovies: sortListByYear };

		case SORT_BY_GENRE:
			const sortListByGenre = state.listMovies.filter(obj => {
				return state.selectedGenres.every((id: number) => obj.genre_ids.includes(id));
			});
			console.log('sortListByGenre: ', sortListByGenre);

			return { ...state, listMovies: sortListByGenre };

		case SELECT_BY_ID:
			const newListSelectedGenre = [...state.selectedGenres, payload];

			return { ...state, selectedGenres: newListSelectedGenre };

		case SORT_SELECTED_IDS:
			const newListSelectedIds = state.selectedGenres.filter((id: number) => id !== payload);
			console.log('newListSelectedIds: ', newListSelectedIds);

			return { ...state, selectedGenres: newListSelectedIds };

		default:
			return state;
	}
}
