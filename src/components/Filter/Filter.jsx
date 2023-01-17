import Pagination from '../Pagination/Pagination';
import Genre from './Genre/Genre';
// import Select from './Select/Select';

import styles from './Filter.module.scss';

const array = [
	'боевик',
	'приключения',
	'мультфильм',
	'комедия',
	'криминал',
	'документальный',
	'драма',
	'семейный',
	'фэнтези',
	'история',
	'ужасы',
	'музыка',
	'детектив',
	'мелодрама',
	'фантастика',
	'телевизионный фильм',
	'триллер',
	'военный',
	'вестерн',
];

function Filter() {
	return (
		<div className={styles.root}>
			<h2>Фильтры: </h2>
			<button className={styles.removeAllFilters}>Сбросить все фильтры</button>
			<span>Сортировать по: </span>
			<select name="" id="" className={styles.select}>
				<option value="">Пополярные по убыванию</option>
			</select>
			{/* <Select /> */}
			<span>Год релиза: </span>
			<select name="" id="" className={styles.select}>
				<option value="">2020</option>
			</select>
			<ul className={styles.list}>
				{array.map(item => (
					<Genre title={item} />
				))}
				{/* <li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li>
				<li className={styles.item}>
					<input type="checkbox" />
					<span>Thriller</span>
				</li> */}
			</ul>
			<Pagination />
		</div>
	);
}

export default Filter;
