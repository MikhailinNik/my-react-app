import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../ts/hooks';
import { setMovies, sortByPopularityDesc } from '../redux/actions';

import Filter from '../components/Filter/Filter';
import CardList from '../components/CardList/CardList';
import Pagination from '../components/Pagination/Pagination';

import { movies, checkboxes } from '../db';

import { FIRST_PAGE } from '../ts/const';

function Home() {
	const dispatch = useAppDispatch();
	const { listMovies } = useAppSelector(state => state.listFilms);
	const [totalCount, setTotalCount] = useState(movies.length);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	useEffect(() => {
		dispatch(setMovies(movies));
		dispatch(sortByPopularityDesc(movies));
	}, []);

	useEffect(() => {
		setTotalCount(listMovies.length);
		if (listMovies.length === 0) {
			dispatch(setMovies(movies));
			dispatch(sortByPopularityDesc(movies));
		}

		if (currentPage > totalCount) {
			setCurrentPage(Math.ceil(totalCount / pageSize));
		}
	}, [listMovies, totalCount, currentPage]);

	const totalPageCount = Math.ceil(totalCount / pageSize);
	const onPageChanged = (page: number): void => {
		setCurrentPage(page);
	};

	const start = currentPage * pageSize - pageSize;
	const end = start + pageSize;

	const range = (start: number, end: number) => {
		const firstElement = currentPage - 1;
		const secondElement = pageSize;

		if (currentPage === FIRST_PAGE) {
			const list = listMovies.slice(firstElement, secondElement);
			return list;
		}

		const newList = listMovies.slice(start, end);

		return newList;
	};

	const result = range(start, end);

	return (
		<div className="content">
			<div className="filters">
				<Filter checkboxes={checkboxes} movies={movies} />

				<Pagination
					totalPageCount={totalPageCount}
					currentPage={currentPage}
					onPageChanged={onPageChanged}
				/>
			</div>
			<CardList movies={result} />
		</div>
	);
}

export default Home;
