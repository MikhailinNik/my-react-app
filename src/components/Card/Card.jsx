import styles from './Card.module.scss';

import poster from '../../assets/posterjpg.jpg';

function Card() {
	return (
		<div className={styles.root}>
			<div className={styles.poster}>
				<img src={poster} alt="Poster" />
			</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<span>Рейтинг: 8.4</span>
					<div className={styles.icons}>
						<svg
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
								fill="none"
								points="25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 "
								stroke="#000000"
								strokeMiterlimit="10"
								strokeWidth="4"
							/>
						</svg>
						<svg
							fill="none"
							height="20"
							viewBox="0 0 24 24"
							width="17"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3.3 3H20.7C20.8657 3 21 3.13431 21 3.3V21.4811C21 21.7119 20.7503 21.8562 20.5503 21.7411L12.1497 16.9044C12.057 16.851 11.943 16.851 11.8503 16.9044L3.44969 21.7411C3.24969 21.8562 3 21.7119 3 21.4811V3.3C3 3.13431 3.13431 3 3.3 3Z"
								stroke="black"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
				<div className={styles.title}>
					<h4>Истребитель демонов: Поезд бесконечный</h4>
				</div>
				<div className={styles.about}>
					<span>Подробнее</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
