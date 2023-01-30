import styles from './Select.module.scss';

import { SortBy, SortByYear, AuthSort } from '../../../ts/const';

type SelectProps = {
	value: string | number | Set<number>[];
	onChange: (arg0: any) => void;
	sortMovies: SortBy | SortByYear | AuthSort;
};

function Select({ value, onChange, sortMovies }: SelectProps) {
	return (
		<select value={value} className={styles.select} onChange={onChange}>
			{Object.values(sortMovies).map(item => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	);
}

export default Select;
