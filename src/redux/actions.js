export const SET_MOVIES = 'SET_MOVIES';
export const SORT_MOVIES = 'SORT_MOVIES';

const actionCreator = type => {
	return payload => {
		return {
			type,
			payload,
		};
	};
};

export const setMovies = actionCreator(SET_MOVIES);
export const sortMovies = actionCreator(SORT_MOVIES);
