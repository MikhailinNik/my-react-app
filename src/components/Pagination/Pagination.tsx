import styles from './Pagination.module.scss';

function Pagination() {
	return (
		<div className={styles.root}>
			<div className={styles.buttons}>
				<button className={styles.button}>Назад</button>
				<button className={styles.button}>Вперед</button>
			</div>
			<div className={styles.countPage}>
				<span>1 of 1455</span>
			</div>
		</div>
	);
}

export default Pagination;
