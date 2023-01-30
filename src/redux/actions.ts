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
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const ADD_TO_SEE_LATER = 'ADD_TO_SEE_LATER';
export const DELETE_FAVORITE_MOVIE = 'DELETE_FAVORITE_MOVIE';
export const DELETE_SEE_LATER_MOVIE = 'DELETE_SEE_LATER_MOVIE';
export const SORT_BY_GENRE_RANDOM = 'SORT_BY_GENRE_RANDOM';
export const SORT_BY_VOTE_MORE = 'SORT_BY_VOTE_MORE';
export const SORT_BY_VOTE_LESS = 'SORT_BY_VOTE_LESS';
export const SORT_POPULARITY_DESC = 'SORT_POPULARITY_DESC';
export const SORT_POPULARITY_ASC = 'SORT_POPULARITY_ASC';
export const RANDOM_MOVIE = 'RANDOM_MOVIE';

const actionCreator = (type: string) => {
	return (payload: any) => {
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
export const addToFavorite = actionCreator(ADD_TO_FAVORITE);
export const addToSeeLater = actionCreator(ADD_TO_SEE_LATER);
export const deleteFavoriteMovie = actionCreator(DELETE_FAVORITE_MOVIE);
export const deleteSeeLaterMovie = actionCreator(DELETE_SEE_LATER_MOVIE);
export const sortByGenreRandom = actionCreator(SORT_BY_GENRE_RANDOM);
export const sortByVoteMore = actionCreator(SORT_BY_VOTE_MORE);
export const sortByVoteLess = actionCreator(SORT_BY_VOTE_LESS);
export const sortPopularityDesc = actionCreator(SORT_POPULARITY_DESC);
export const sortPopularityAsc = actionCreator(SORT_POPULARITY_ASC);
export const randomMovie = actionCreator(RANDOM_MOVIE);
