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
import Select from './Select/Select';

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
	const [selectedFavorite, setSelectedFavorite] = useState(AUTH_SORT.favorite);

	useEffect(() => {
		if (!isAuth) {
			try {
				const userAuth: string | null = localStorage.getItem('isAuth');
				dispatch(authByLocalStorage(JSON.parse(userAuth)));
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

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

	const sortUserMovies = (evt: object) => {
		const favoriteMovies = localStorage.getItem('favorites');
		const seeLaterMovies = localStorage.getItem('seeLater');

		setSelectedFavorite(evt.target.value);

		if (evt.target.value === AUTH_SORT.favorite) {
			if (favoriteMovies?.length !== 0) {
				return dispatch(setMovies(JSON.parse(favoriteMovies)));
			}
		}

		return dispatch(setMovies(JSON.parse(seeLaterMovies)));
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
			<Select value={selected} onChange={sortList} sortMovies={SORT_BY} />
			<span>Год релиза: </span>
			<Select value={selectedByYear} onChange={sortListByYear} sortMovies={SORT_BY_YEAR} />
			{isAuth ? (
				<Select value={selectedFavorite} onChange={sortUserMovies} sortMovies={AUTH_SORT} />
			) : (
				false
			)}
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
