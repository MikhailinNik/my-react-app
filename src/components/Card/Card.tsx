import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToFavorite, addToSeeLater } from '../../redux/actions';

import CardDetails from '../../pages/CardDetails/CardDetails';

import styles from './Card.module.scss';

import { Movie } from '../../db';

import favoriteIcon from '../../assets/favorite.svg';
import saveIcon from '../../assets/save.svg';

type movie = {
	movie: Movie;
};

function Card({ movie }: movie) {
	const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.users);
	const imagePath = movie.poster_path || movie.backdrop_path;

	const onAddToFavorite = () => {
		if (isAuth) {
			return dispatch(addToFavorite(movie));
		}
	};

	const onAddToSeeLater = () => {
		if (isAuth) {
			return dispatch(addToSeeLater(movie));
		}
	};

	return (
		<div className={styles.root}>
			<img src={'https://image.tmdb.org/t/p/w500' + imagePath} alt="Poster" height={295} />
			<div className={styles.content}>
				<div className={styles.header}>
					<span>Рейтинг: {movie.vote_average}</span>
					<div className={styles.icons}>
						<img
							onClick={onAddToFavorite}
							className={styles.favoriteIcon}
							src={favoriteIcon}
							alt="Favorite"
							width={20}
							height={20}
						/>
						<img
							onClick={onAddToSeeLater}
							className={styles.saveIcon}
							src={saveIcon}
							alt="Save"
							width={18}
							height={20}
						/>
					</div>
				</div>
				<div className={styles.title}>
					<h4>{movie.title}</h4>
				</div>
				<div className={styles.about}>
					<Link to="/card" state={{ movie }}>
						<span className={styles.details}>Подробнее</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card;
