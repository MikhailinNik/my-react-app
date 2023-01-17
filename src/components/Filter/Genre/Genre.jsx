import styles from './Genre.module.scss';

function Genre({ title }) {
	return (
		<div className={styles.item}>
			<input type="checkbox" />
			<span>{title}</span>
		</div>
	);
}

export default Genre;
