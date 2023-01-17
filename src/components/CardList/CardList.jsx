import styles from './CardList.module.scss';

import Card from '../Card/Card';

const arr = [1, 2, 3, 4, 5];

function CardList() {
	return (
		<div className={styles.root}>
			{arr.map(item => (
				<Card />
			))}
			<Card />
		</div>
	);
}

export default CardList;
