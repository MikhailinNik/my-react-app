import { Movie } from './../../db';
import {
	ADD_TO_FAVORITE,
	ADD_TO_SEE_LATER,
	DELETE_SEE_LATER_MOVIE,
	DELETE_FAVORITE_MOVIE,
} from '../actions';

const initialState = {
	favorites: [],
	seeLater: [],
};

export function favorite(state = initialState, { type, payload }: any) {
	switch (type) {
		case ADD_TO_FAVORITE:
			const newListFavorite = [...state.favorites, payload];

			return { ...state, favorites: newListFavorite };

		case ADD_TO_SEE_LATER:
			const newListLater = [...state.seeLater, payload];
			return { ...state, seeLater: newListLater };

		case DELETE_FAVORITE_MOVIE:
			const newFavorite = state.favorites.filter((movie: Movie) => movie.id !== payload.id);

			return { ...state, favorites: newFavorite };

		case DELETE_SEE_LATER_MOVIE:
			const newLater = state.seeLater.filter((movie: Movie) => movie.id !== payload.id);

			return { ...state, seeLater: newLater };

		default:
			return state;
	}
}
