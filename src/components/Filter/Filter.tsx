import Genre from './Genre/Genre';

import styles from './Filter.module.scss';

type Props = {
	checkboxes: [];
};

function Filter({ checkboxes }: Props) {
	return (
		<div className={styles.root}>
			<h2>Фильтры: </h2>
			<button className={styles.removeAllFilters}>Сбросить все фильтры</button>
			<span>Сортировать по: </span>
			<select name="" id="" className={styles.select}>
				<option value="">Пополярные по убыванию</option>
			</select>
			<span>Год релиза: </span>
			<select name="" id="" className={styles.select}>
				<option value="">2020</option>
			</select>
			<ul className={styles.list}>
				{checkboxes.map((item: { id: number; name: string }) => (
					<Genre key={item.id} title={item.name} />
				))}
			</ul>
		</div>
	);
}

export default Filter;
