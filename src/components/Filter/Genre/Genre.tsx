import styles from './Genre.module.scss';

type Props = {
	title: string;
};

function Genre({ title }: Props) {
	return (
		<div className={styles.item}>
			<input type="checkbox" />
			<span>{title}</span>
		</div>
	);
}

export default Genre;
