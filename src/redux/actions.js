export const SET_MOVIES = 'SET_MOVIES';
export const SORT_BY_POPULARITY_ASC = 'SORT_BY_POPULARITY_ASC';
export const SORT_BY_POPULARITY_DESC = 'SORT_BY_POPULARITY_DESC';
export const SORT_BY_RATE_DESC = 'SORT_BY_RATE_DESC';
export const SORT_BY_RATE_ASC = 'SORT_BY_RATE_ASC';
export const SORT_BY_YEAR = 'SORT_BY_YEAR';

const actionCreator = type => {
	return payload => {
		return {
			type,
			payload,
		};
	};
};

export const setMovies = actionCreator(SET_MOVIES);
export const sortByPopularityDesc = actionCreator(SORT_BY_POPULARITY_DESC);
export const sortByPopularityAsc = actionCreator(SORT_BY_POPULARITY_ASC);
export const sortByRateDesc = actionCreator(SORT_BY_RATE_DESC);
export const sortByRateAsc = actionCreator(SORT_BY_RATE_ASC);
export const sortByYear = actionCreator(SORT_BY_YEAR);
