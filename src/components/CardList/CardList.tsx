import styles from './CardList.module.scss';

import Card from '../Card/Card';
import { Movie } from '../../db';
import { useSelector } from 'react-redux';

type Props = {
	movies: [];
};

function CardList({ movies }: Props) {
	return (
		<div className={styles.root}>
			{movies.map((movie: Movie) => (
				<Card key={movie.id} movie={movie} />
			))}
		</div>
	);
}

export default CardList;
