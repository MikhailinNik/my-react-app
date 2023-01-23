import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setMovies, sortByPopularityDesc } from '../redux/actions';

import Filter from '../components/Filter/Filter';
import CardList from '../components/CardList/CardList';
import Pagination from '../components/Pagination/Pagination';

import { movies, checkboxes } from '../db';

import { FIRST_PAGE } from '../js/const';

function Home() {
	const dispatch = useDispatch();
	const { listMovies } = useSelector(state => state.listFilms);
	const [totalCount, setTotalCount] = useState(movies.length);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	useEffect(() => {
		setTotalCount(listMovies.length);
		if (listMovies.length === 0) {
			dispatch(setMovies(movies));
			dispatch(sortByPopularityDesc(movies));
		}
	}, [listMovies, totalCount, currentPage]);

	const onPageChanged = (page: number): void => {
		setCurrentPage(page);
	};

	console.log('totalCount: ', totalCount);
	const totalPageCount = Math.ceil(totalCount / pageSize);

	const start = currentPage * pageSize - pageSize;
	const end = start + pageSize;

	const range = (start: number, end: number) => {
		const firstElement = currentPage - 1;
		const secondElement = pageSize;

		if (currentPage === FIRST_PAGE) {
			return listMovies.slice(firstElement, secondElement);
		}

		const newList = listMovies.slice(start, end);

		return newList;
	};

	const result = range(start, end);

	return (
		<div className="content">
			<div className="filters">
				<Filter checkboxes={checkboxes} setTotalCount={setTotalCount} movies={movies} />

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
