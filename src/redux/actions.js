export const SET_MOVIES = 'SET_MOVIES';

const actionCreator = type => {
	return payload => {
		return {
			type,
			payload,
		};
	};
};

export const setMovies = actionCreator(SET_MOVIES);
