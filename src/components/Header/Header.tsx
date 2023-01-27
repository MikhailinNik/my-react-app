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
				<Link to="/login">
					<button>Login</button>
				</Link>
			)}
		</nav>
	);
}

export default Header;
