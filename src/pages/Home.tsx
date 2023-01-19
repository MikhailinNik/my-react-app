import { useEffect } from 'react';
import Filter from '../components/Filter/Filter';
import CardList from '../components/CardList/CardList';

import { useSelector, useDispatch } from 'react-redux';

import { setMovies } from '../redux/actions';
import { movies, checkboxes } from '../db';

function Home() {
	return (
		<div className="content">
			<Filter checkboxes={checkboxes} />
			<CardList movies={movies} />
		</div>
	);
}

export default Home;
