import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
	sortByPopularityDesc,
	setMovies,
	sortByPopularityAsc,
	sortByRateDesc,
	sortByRateAsc,
	sortByYear,
} from '../../redux/actions';

import Genre from './Genre/Genre';

import styles from './Filter.module.scss';

import { SORT_BY, SORT_BY_YEAR } from '../../js/const';

type Props = {
	checkboxes: [];
};

function Filter({ checkboxes, setTotalCount, movies }: Props) {
	const dispatch = useDispatch();
	const { listMovies } = useSelector(state => state.listFilms);

	const sortList = (evt: any) => {
		switch (evt.target.value) {
			case SORT_BY.popularityDesc:
				return dispatch(sortByPopularityDesc(listMovies));

			case SORT_BY.popularityAsc:
				return dispatch(sortByPopularityAsc(listMovies));

			case SORT_BY.rateDesc:
				return dispatch(sortByRateDesc(listMovies));

			case SORT_BY.rateAsc:
				return dispatch(sortByRateAsc(listMovies));

			default:
				return dispatch(sortByPopularityDesc(listMovies));
		}
	};

	const sortListByYear = (evt: any) => {
		dispatch(setMovies(movies));

		return dispatch(sortByYear(evt.target.value));
	};

	return (
		<div className={styles.root}>
			<h2>Фильтры: </h2>
			<button className={styles.removeAllFilters}>Сбросить все фильтры</button>
			<span>Сортировать по: </span>
			<select name="" id="" className={styles.select} onChange={sortList}>
				{Object.values(SORT_BY).map((item: string) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
			<span>Год релиза: </span>
			<select name="" id="" className={styles.select} onChange={sortListByYear}>
				{SORT_BY_YEAR.map((year: number) => (
					<option value={year.toString()}>{year.toString()}</option>
				))}
			</select>
			<ul className={styles.list}>
				{checkboxes.map((item: { id: number; name: string }) => (
					<Genre key={item.id} title={item.name} />
				))}
			</ul>
		</div>
	);
}

export default Filter;
