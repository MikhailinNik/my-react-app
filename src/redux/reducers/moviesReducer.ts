import {
	SET_MOVIES,
	SORT_BY_POPULARITY_ASC,
	SORT_BY_POPULARITY_DESC,
	SORT_BY_RATE_DESC,
	SORT_BY_RATE_ASC,
	SORT_BY_YEAR,
} from '../actions';

interface moviesState {
	listMovies: [];
}

const initialState = {
	listMovies: [],
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
			debugger;
			const sortListByYear = [];
			state.listMovies.forEach(obj => {
				const date = obj.release_date.slice(0, 4);
				if (date === payload) {
					return sortListByYear.push(obj);
				}
			});
			console.log('sortListByYear: ', sortListByYear);

			return { ...state, listMovies: sortListByYear };

		default:
			return state;
	}
}
