import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../ts/hooks';

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
	sortAllMovies: () => void;
	selectedCheckboxes: Set<string>;
	setSelectedCheckboxes: (arg0: Set<any>) => void;
};

function Genre({ title, id, sortAllMovies, selectedCheckboxes, setSelectedCheckboxes }: Props) {
	const dispatch = useAppDispatch();
	const { selectedGenres, listMovies } = useAppSelector(state => state.listFilms);
	console.log('selectedGenres: ', selectedGenres);
	console.log('listMovies: ', listMovies);
	const [isCheck, setIsCheck] = useState(false);

	const onSelectGenre = (evt: any) => {
		setIsCheck(!isCheck);
		dispatch(setSelectedGenre(id));
		if (selectedCheckboxes.size === 0) {
			setSelectedCheckboxes(new Set([...selectedCheckboxes, evt.target.value]));
		}

		if (selectedCheckboxes.has(evt.target.value)) {
			selectedCheckboxes.delete(evt.target.value);

			setSelectedCheckboxes(selectedCheckboxes);
		} else {
			setSelectedCheckboxes(new Set([...selectedCheckboxes, evt.target.value]));
		}
		debugger;

		if (selectedGenres.includes(id)) {
			dispatch(sortSelectedGenre(id));

			sortAllMovies();
		}

		dispatch(sortByGenre());
	};

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
