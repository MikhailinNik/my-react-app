import styles from './CardList.module.scss';

import Card from '../Card/Card';
import { Movie } from '../../db';

type movies = {
	movies: Movie[];
};

function CardList({ movies }: movies) {
	return (
		<div className={styles.root}>
			{movies.map(movie => (
				<Card key={movie.id} movie={movie} />
			))}
		</div>
	);
}

export default CardList;
