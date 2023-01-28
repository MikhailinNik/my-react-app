import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../ts/hooks';

import {
	sortByPopularityDesc,
	setMovies,
	sortByPopularityAsc,
	sortByRateDesc,
	sortByRateAsc,
	sortByYear,
	authByLocalStorage,
	SORT_BY_POPULARITY_DESC,
} from '../../redux/actions';

import Genre from './Genre/Genre';

import styles from './Filter.module.scss';

import { SORT_BY, SORT_BY_YEAR, AUTH_SORT } from '../../ts/const';
import { CheckBoxes, Movie } from '../../db';

interface Props {
	checkboxes: CheckBoxes[];
	movies: Movie[];
}

function Filter({ checkboxes, movies }: Props) {
	const dispatch = useAppDispatch();
	const { listMovies } = useAppSelector(state => state.listFilms);
	const { isAuth } = useAppSelector(state => state.users);
	const { favorites, seeLater } = useAppSelector(state => state.favorites);
	const [selected, setSelected] = useState(SORT_BY_POPULARITY_DESC);
	const [selectedByYear, setSelectedByYear] = useState(0);
	const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set([]));

	useEffect(() => {
		if (!isAuth) {
			try {
				const userAuth: string | null = localStorage.getItem('isAuth');
				dispatch(authByLocalStorage(JSON.parse(userAuth)));
			} catch (error) {
				console.log(error);
			}
		}
	}, [selected, selectedByYear, listMovies]);

	const sortList = (evt: any) => {
		setSelected(evt.target.value);

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
		setSelectedByYear(evt.target.value);

		dispatch(setMovies(movies));

		if (evt.target.value !== 0) {
			dispatch(sortByYear(evt.target.value));
		}
	};

	const onResetAllFilters = () => {
		setSelected(SORT_BY.popularityDesc);
		setSelectedByYear(SORT_BY_YEAR[1]);

		setSelectedCheckboxes(new Set([]));
		dispatch(sortByPopularityDesc(movies));
	};

	const sortUserMovies = () => {
		if (AUTH_SORT.favorite) {
			return dispatch(setMovies(favorites));
		}
		return dispatch(setMovies(seeLater));
	};

	const sortAllMovies = () => {
		let target;
		const select = {
			target: (target = {
				value: selected,
			}),
		};

		const year = {
			target: (target = {
				value: selectedByYear,
			}),
		};

		sortList(select);

		sortListByYear(year);
	};

	return (
		<div className={styles.root}>
			<h2>Фильтры: </h2>
			<button className={styles.removeAllFilters} onClick={onResetAllFilters}>
				Сбросить все фильтры
			</button>
			<span>Сортировать по: </span>
			<select value={selected} className={styles.select} onChange={sortList}>
				{Object.values(SORT_BY).map((item: string) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
			<span>Год релиза: </span>
			<select value={selectedByYear} className={styles.select} onChange={sortListByYear}>
				{Object.values(SORT_BY_YEAR).map((year: number) => (
					<option key={year} value={year.toString()}>
						{year.toString()}
					</option>
				))}
			</select>
			{isAuth ? (
				<select className={styles.select} onChange={sortUserMovies}>
					{Object.values(AUTH_SORT).map((value: string) => (
						<option key={value} value={value}>
							{value}
						</option>
					))}
				</select>
			) : null}
			<ul className={styles.list}>
				{checkboxes.map((item: { id: number; name: string }) => (
					<Genre
						key={item.id}
						title={item.name}
						id={item.id}
						sortAllMovies={sortAllMovies}
						selectedCheckboxes={selectedCheckboxes}
						setSelectedCheckboxes={setSelectedCheckboxes}
					/>
				))}
			</ul>
		</div>
	);
}

export default Filter;
