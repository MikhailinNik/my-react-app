import styles from './Select.module.scss';

type Props = {
	props: string;
};

function Select(props: Props) {
	return (
		<select name="" id="" className={styles.select}>
			<option value="">{props}</option>
		</select>
	);
}

export default Select;
