import { SET_MOVIES, SORT_MOVIES } from '../actions';

interface moviesState {
	listMovies: [];
}

const initialState = {
	listMovies: [],
} as moviesState;

export function movie(state = initialState, action: any) {
	switch (action.type) {
		case SET_MOVIES:
			const newMovies = [...state.listMovies, action.payload];

			return { ...state, listMovies: newMovies };

		case SORT_MOVIES:
			const sortMovies = [action.payload].sort((a, b) => b.popularity - a.popularity);
			return { ...state, listMovies: sortMovies };

		default:
			return state;
	}
}
