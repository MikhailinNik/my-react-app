import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { logOut } from '../../redux/actions';

function Header() {
	const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.users);

	const onLogOut = () => {
		delete localStorage.isAuth;
		dispatch(logOut());
	};

	return (
		<nav className={styles.root}>
			<Link to="/">
				<h2>Home</h2>
			</Link>
			{isAuth ? (
				<button onClick={onLogOut}>Выйти</button>
			) : (
				<>
					<Link to="/search">
						<button className={styles.searchBtn}>Random Film</button>
					</Link>
					<Link to="/login">
						<button className={styles.loginBtn}>Login</button>
					</Link>
				</>
			)}
		</nav>
	);
}

export default Header;
