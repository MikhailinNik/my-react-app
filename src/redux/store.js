import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { movie } from './reducers/moviesReducer';
import { auth } from './reducers/userReducer';
import { favorite } from './reducers/favoriteReducer';

const rootReducer = combineReducers({
	listFilms: movie,
	users: auth,
	favorites: favorite,
});

export const store = createStore(rootReducer);
