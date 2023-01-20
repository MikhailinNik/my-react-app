import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { movie } from './reducers/moviesReducer';

const rootReducer = combineReducers({
	listFilms: movie,
});

export const store = createStore(rootReducer);
