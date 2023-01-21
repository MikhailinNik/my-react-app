import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { sortMovies, setMovies } from '../../redux/actions';

import Genre from './Genre/Genre';

import styles from './Filter.module.scss';
import { useState } from 'react';

type Props = {
	checkboxes: [];
};

function Filter({ checkboxes }: Props) {
	const dispatch = useDispatch();
	const { listMovies } = useSelector(state => state.listFilms);
	const [value, setValue] = useState('descending');

	const sortList = (evt: any) => {
		debugger;
		if (value === evt.target.value) {
			dispatch(sortMovies(listMovies[0]));
			return console.log('listMovies: ', listMovies);
		}

		setValue(evt.target.value);
		const sortListByAsc = listMovies[0].reverse();
		return dispatch(setMovies(sortListByAsc));
	};

	return (
		<div className={styles.root}>
			<h2>Фильтры: </h2>
			<button className={styles.removeAllFilters}>Сбросить все фильтры</button>
			<span>Сортировать по: </span>
			<select name="" id="" className={styles.select} onChange={sortList}>
				<option value="descending">Пополярные по убыванию</option>
				<option value="ascending">Пополярные по возрастанию</option>
			</select>
			<span>Год релиза: </span>
			<select name="" id="" className={styles.select}>
				<option value="">2020</option>
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
