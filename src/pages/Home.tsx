import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../redux/actions';

import Filter from '../components/Filter/Filter';
import CardList from '../components/CardList/CardList';
import Pagination from '../components/Pagination/Pagination';

import { movies, checkboxes } from '../db';

const FIRST_PAGE = 1;

function Home() {
	const dispatch = useDispatch();
	const { listMovies } = useSelector(state => state.listFilms);
	const [totalCount, setTotalCount] = useState(movies.length);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	if (listMovies.length === 0) {
		return dispatch(setMovies(movies));
	}

	console.log('listMovies: ', listMovies);
	const onPageChanged = (page: number): void => {
		setCurrentPage(page);
	};

	const totalPageCount = Math.ceil(totalCount / pageSize);

	const start = currentPage * pageSize - 1;
	const end = start + pageSize;

	const range = (start: number, end: number) => {
		const firstElement = currentPage - 1;
		const secondElement = pageSize;

		if (currentPage === FIRST_PAGE) {
			return listMovies[0].slice(firstElement, secondElement);
		}

		const newList = listMovies[0].slice(start, end);

		return newList;
	};

	const result = range(start, end);

	return (
		<div className="content">
			<div className="filters">
				<Filter movies={movies} checkboxes={checkboxes} />

				<Pagination
					totalPageCount={totalPageCount}
					currentPage={currentPage}
					onPageChanged={onPageChanged}
				/>
			</div>
			<CardList currentPage={currentPage} movies={result} />
		</div>
	);
}

export default Home;
