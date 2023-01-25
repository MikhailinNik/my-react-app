import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	sortByGenre,
	setSelectedGenre,
	sortSelectedGenre,
	setMovies,
} from '../../../redux/actions';

import styles from './Genre.module.scss';

type Props = {
	title: string;
	id: number;
};

function Genre({ title, id, sortAllMovies, selectedCheckboxes, setSelectedCheckboxes }: Props) {
	const dispatch = useDispatch();
	const { selectedGenres, listMovies } = useSelector(state => state.listFilms);
	const [isCheck, setIsCheck] = useState(false);

	const onSelectGenre = evt => {
		setIsCheck(!isCheck);
		dispatch(setSelectedGenre(id));
		debugger;

		if (selectedCheckboxes.size === 0) {
			setSelectedCheckboxes(new Set([...selectedCheckboxes, evt.target.value]));
		}

		if (selectedCheckboxes.has(evt.target.value)) {
			selectedCheckboxes.delete(evt.target.value);

			setSelectedCheckboxes(selectedCheckboxes);
		}

		setSelectedCheckboxes(new Set([...selectedCheckboxes, evt.target.value]));

		if (selectedGenres.includes(id)) {
			dispatch(sortSelectedGenre(id));

			sortAllMovies();
		}

		dispatch(sortByGenre());
	};

	// useEffect(() => {
	// 	if (!isCheck || listMovies.length === 0) {
	// }, [isCheck]);

	return (
		<div className={styles.item}>
			<input
				value={title}
				type="checkbox"
				onChange={onSelectGenre}
				checked={selectedCheckboxes.has(title)}
			/>
			<span>{title}</span>
		</div>
	);
}

export default Genre;
