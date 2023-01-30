import { useAppDispatch, useAppSelector } from '../../ts/hooks';

import { Link } from 'react-router-dom';

import {
	addToFavorite,
	addToSeeLater,
	deleteFavoriteMovie,
	deleteSeeLaterMovie,
} from '../../redux/actions';

import styles from './Card.module.scss';

import { Movie } from '../../db';

import saveIcon from '../../assets/save.svg';
import saveIconComplete from '../../assets/save2svg.svg';
import { useEffect, useState } from 'react';

type movie = {
	movie: Movie;
};

function Card({ movie }: movie) {
	const dispatch = useAppDispatch();
	const { isAuth } = useAppSelector(state => state.users);
	const { favorites, seeLater } = useAppSelector(state => state.favorites);
	const [colorFavorite, setColorFavorite] = useState('');
	const [isSave, setIsSave] = useState(false);
	const imagePath = movie.poster_path || movie.backdrop_path;

	useEffect(() => {
		if (colorFavorite) {
			localStorage.setItem('favorites', JSON.stringify(favorites));
		}

		if (isSave) {
			localStorage.setItem('seeLater', JSON.stringify(seeLater));
		}

		if (isAuth) {
		}
	}, [colorFavorite, seeLater]);

	const onAddToFavorite = () => {
		if (isAuth) {
			if (colorFavorite) {
				setColorFavorite('none');
				return dispatch(deleteFavoriteMovie(movie));
			} else {
				setColorFavorite('black');
				return dispatch(addToFavorite(movie));
			}
		}
	};

	const onAddToSeeLater = () => {
		if (isAuth) {
			setIsSave(!isSave);

			return dispatch(addToSeeLater(movie));
		}
	};

	const onDeleteSeeLater = () => {
		if (isAuth) {
			setIsSave(!isSave);

			return dispatch(deleteSeeLaterMovie(movie));
		}
	};

	return (
		<div className={styles.root}>
			<img src={'https://image.tmdb.org/t/p/w500' + imagePath} alt="Poster" height={295} />
			<div className={styles.content}>
				<div className={styles.header}>
					<span>Рейтинг: {movie.vote_average}</span>
					<div className={styles.icons}>
						<svg
							onClick={onAddToFavorite}
							enableBackground="new 0 0 50 50"
							height="20px"
							id="Layer_1"
							version="1.1"
							viewBox="0 0 50 50"
							width="20px"
							xmlSpace="preserve"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<rect fill="none" height="50" width="50" />
							<polygon
								fill={colorFavorite ? colorFavorite : 'none'}
								points="25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 "
								stroke="#000000"
								strokeMiterlimit="10"
								strokeWidth="2"
							/>
						</svg>

						{isSave ? (
							<img
								onClick={onDeleteSeeLater}
								src={saveIconComplete}
								alt="Save"
								width={20}
								height={20}
								className={styles.saveIcon}
							/>
						) : (
							<img
								onClick={onAddToSeeLater}
								className={styles.saveIcon}
								src={saveIcon}
								alt="Save"
								width={18}
								height={20}
							/>
						)}
					</div>
				</div>
				<div className={styles.title}>
					<h4>{movie.title}</h4>
				</div>
				<div className={styles.about}>
					<Link to={'/card/:' + movie.id} state={{ movie }}>
						<span className={styles.details}>Подробнее</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card;
