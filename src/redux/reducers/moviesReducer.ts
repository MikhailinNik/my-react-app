import { SET_MOVIES } from '../actions';

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
			console.log('newMovies: ', newMovies);

			return { ...state, listMovies: newMovies };

		default:
			return state;
	}
}
