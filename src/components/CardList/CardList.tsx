import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styles from './CardList.module.scss';

import Card from '../Card/Card';
import { Movie } from '../../db';

type Props = {
	movies: [];
};

function CardList({ movies, setTotalCount }: Props) {
	const { isAuth } = useSelector(state => state.users);
	console.log('isAuth: ', isAuth);
	return (
		<div className={styles.root}>
			{!isAuth ? (
				<>
					<h2>Пожалуйста, авторизуйтесь</h2>
				</>
			) : (
				movies.map((movie: Movie) => <Card key={movie.id} movie={movie} />)
			)}
			{}
		</div>
	);
}

export default CardList;
