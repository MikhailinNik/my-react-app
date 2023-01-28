import styles from './Pagination.module.scss';

type NewType = (arg0: number) => void;

type Props = {
	totalPageCount: number;
	currentPage: number;
	onPageChanged: NewType;
};

function Pagination({ totalPageCount, currentPage, onPageChanged }: Props) {
	const onPrevious = () => {
		return onPageChanged(currentPage - 1);
	};
	const onNext = () => {
		return onPageChanged(currentPage + 1);
	};
	return (
		<div className={styles.root}>
			<div className={styles.buttons}>
				<button
					disabled={currentPage === 1 ? true : false}
					className={currentPage === 1 ? styles.buttonDisabled : styles.button}
					onClick={() => onPrevious()}>
					Назад
				</button>
				<button
					disabled={currentPage === totalPageCount ? true : false}
					className={currentPage === totalPageCount ? styles.buttonDisabled : styles.button}
					onClick={() => onNext()}>
					Вперед
				</button>
			</div>
			<div className={styles.countPage}>
				<span>
					{currentPage} of {totalPageCount}
				</span>
			</div>
		</div>
	);
}

export default Pagination;
