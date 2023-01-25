import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { movie } from './reducers/moviesReducer';
import { auth } from './reducers/userReducer';
const rootReducer = combineReducers({
	listFilms: movie,
	users: auth,
});

export const store = createStore(rootReducer);
