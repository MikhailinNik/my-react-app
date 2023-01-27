import { ADD_TO_FAVORITE, ADD_TO_SEE_LATER } from '../actions';

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

		default:
			return state;
	}
}
