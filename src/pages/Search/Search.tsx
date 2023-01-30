import { Link } from 'react-router-dom';

import styles from './Search.module.scss';

import Select from '../../components/Filter/Select/Select';
import { checkboxes, movies } from '../../db';
import { useAppDispatch, useAppSelector } from '../../ts/hooks';
import {
	sortByGenre,
	sortByGenreRandom,
	sortByVoteLess,
	sortByVoteMore,
	sortPopularityDesc,
	sortPopularityAsc,
	randomMovie,
	setMovies,
} from '../../redux/actions';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { popularOptions, voteOptions } from '../../ts/const';

function Search() {
	const dispatch = useAppDispatch();
	const { listMovies, movie } = useAppSelector(state => state.listFilms);
	const [isRandomMovie, setIsRandomMovie] = useState(false);
	const [genreValue, setGenreValue] = useState(null);
	const [voteValue, setVoteValue] = useState(voteOptions.high);
	const [popularValue, setPopularValue] = useState(popularOptions.popular);

	useEffect(() => {
		if (listMovies.length === 0) {
			dispatch(setMovies(movies));
		}
	}, []);

	const onChangeGenre = evt => {
		const checkboxesIds = checkboxes.filter(obj => obj.name === evt.target.value);
		dispatch(sortByGenreRandom(checkboxesIds[0].id));
		setGenreValue(evt.target.value);
	};

	const onFilterByVote = evt => {
		if (evt.target.value === voteValue) {
			return dispatch(sortByVoteMore(5));
		}
		setVoteValue(evt.target.value);
		return dispatch(sortByVoteLess(5));
	};

	const onFilterByPopularity = evt => {
		if (evt.target.value === popularValue) {
			return dispatch(sortPopularityDesc(100));
		}

		setPopularValue(evt.target.value);
		return dispatch(sortPopularityAsc(100));
	};

	const resultMovie = () => {
		setIsRandomMovie(!isRandomMovie);
		dispatch(randomMovie());
	};

	const movieNotSuitable = () => {
		let target;
		const genre = {
			target: (target = {
				value: genreValue,
			}),
		};

		const vote = {
			target: (target = {
				value: voteValue,
			}),
		};

		const popular = {
			target: (target = {
				value: popularValue,
			}),
		};
		onChangeGenre(genre);
		onFilterByVote(vote);
		onFilterByPopularity(popular);
		dispatch(randomMovie());
	};

	return (
		<div className={styles.root}>
			<div className={styles.content}>
				{isRandomMovie ? (
					<div className={styles.randomMovie}>
						<Card movie={movie} />
						<div className={styles.btns}>
							<Link to={'/card/:' + movie.id} state={{ movie }}>
								<button className={styles.resultBtn} onClick={resultMovie}>
									Подходит
								</button>
							</Link>
							<button className={styles.resultBtn} onClick={movieNotSuitable}>
								Не подходит
							</button>
						</div>
					</div>
				) : (
					<div className={styles.form}>
						<h2>Выбор жанра</h2>
						<select className={styles.applyBtn} onChange={evt => onChangeGenre(evt)}>
							{checkboxes.map((item: { id: number; name: string }) => (
								<option key={item.id} value={item.name}>
									{item.name}
								</option>
							))}
						</select>

						<h2>Оценка фильма</h2>
						<select value={voteValue} className={styles.applyBtn} onChange={onFilterByVote}>
							{Object.values(voteOptions).map((option: string, idx: number) => (
								<option key={idx} value={option}>
									{option}
								</option>
							))}
						</select>

						<h2>Популярность</h2>
						<select
							value={popularValue}
							className={styles.applyBtn}
							onChange={onFilterByPopularity}>
							{Object.values(popularOptions).map((option, idx) => (
								<option key={idx} value={option}>
									{option}
								</option>
							))}
						</select>
						<button className={styles.resultBtn} onClick={resultMovie}>
							Подобрать фильм
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Search;
