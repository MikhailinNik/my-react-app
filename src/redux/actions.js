export const SET_MOVIES = 'SET_MOVIES';
export const SORT_BY_POPULARITY_ASC = 'SORT_BY_POPULARITY_ASC';
export const SORT_BY_POPULARITY_DESC = 'SORT_BY_POPULARITY_DESC';
export const SORT_BY_RATE_DESC = 'SORT_BY_RATE_DESC';
export const SORT_BY_RATE_ASC = 'SORT_BY_RATE_ASC';
export const SORT_BY_YEAR = 'SORT_BY_YEAR';
export const SORT_BY_GENRE = 'SORT_BY_GENRE';
export const SELECT_BY_ID = 'SELECT_BY_ID';
export const SORT_SELECTED_IDS = 'SORT_SELECTED_IDS';
export const IS_AUTH = 'IS_AUTH';
export const IS_AUTH_LOCAL_STORAGE = 'IS_AUTH_LOCAL_STORAGE';
export const LOG_OUT = 'LOG_OUT';

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
export const sortByGenre = actionCreator(SORT_BY_GENRE);
export const setSelectedGenre = actionCreator(SELECT_BY_ID);
export const sortSelectedGenre = actionCreator(SORT_SELECTED_IDS);
export const auth = actionCreator(IS_AUTH);
export const authByLocalStorage = actionCreator(IS_AUTH_LOCAL_STORAGE);
export const logOut = actionCreator(LOG_OUT);
