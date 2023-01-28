import { useLocation } from 'react-router-dom';

import styles from './CardDetails.module.scss';

function CardDetails() {
	const location = useLocation();
	const { movie } = location.state;

	const imagePath = movie.poster_path || movie.backdrop_path;
	const sectionStyle = {
		backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')',
	};

	return (
		<div className={styles.root}>
			<div className={styles.header} style={sectionStyle}>
				<div className={styles.headerContent}>
					<img src={'https://image.tmdb.org/t/p/w500' + imagePath} alt="Poster" />
				</div>
				<div className={styles.description}>
					<h1>{movie.title}</h1>
					<span>Рейтинг: {movie.vote_average}</span>
					<p>{movie.overview}</p>
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.footerNav}>
					<h3>Детали</h3>
					<h3>Видео</h3>
					<h3>Актеры</h3>
				</div>

				<div className={styles.footerDetails}>
					<div className={styles.headers}>
						<h3>Статус</h3>
						<h3>Дата выхода</h3>
						<h3>Продолжительность</h3>
						<h3>Язык оригинала</h3>
						<h3>Страна</h3>
						<h3>Бюджет</h3>
					</div>
					<div className={styles.headers}>
						<span>Release</span>
						<span>{movie.release_date}</span>
						<span>123</span>
						<span>{movie.original_language}</span>
						<span>123</span>
						<span>123</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardDetails;
