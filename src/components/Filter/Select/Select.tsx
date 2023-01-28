import styles from './Select.module.scss';

import { SELECT_VALUES } from '../../../ts/const';

type Props = {
	props: any;
};

function Select(props: Props) {
	return (
		<select name="" id="" className={styles.select} onChange={props}>
			{SELECT_VALUES.map(item => (
				<option value={props}>{item}</option>
			))}
		</select>
	);
}

export default Select;
