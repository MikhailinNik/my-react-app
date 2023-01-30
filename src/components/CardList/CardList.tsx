import styles from './CardList.module.scss';

import Card from '../Card/Card';
import { Movie } from '../../db';

type Props = {
	movies: [];
};

function CardList({ movies }: Props) {
	return (
		<div className={styles.root}>
			{movies.length === 0 ? (
				<>
					<h2>Нет фильмов...</h2>
					<span>Добавьте хотя бы один</span>
				</>
			) : (
				movies.map((movie: Movie) => <Card key={movie.id} movie={movie} />)
			)}
		</div>
	);
}

export default CardList;
