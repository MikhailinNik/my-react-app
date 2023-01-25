import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../redux/actions';

import styles from './Login.module.scss';

import { useEffect } from 'react';

function Login() {
	const dispatch = useDispatch();
	const { users, isAuth } = useSelector(state => state.users);
	const [loginValue, setLoginValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	console.log('users: ', users);
	useEffect(() => {
		if (isAuth) {
			localStorage.setItem('isAuth', isAuth);

			console.log('isAuth: ', isAuth);
		}
	}, [isAuth]);

	const submit = evt => {
		evt.preventDefault();

		const user = {
			login: loginValue,
			password: passwordValue,
		};

		dispatch(auth(user));
	};

	return (
		<form className={styles.root} onSubmit={evt => submit(evt)}>
			<h1>Auth</h1>
			{isAuth ? (
				<>
					<h2>Вы успешно авторизованы!</h2>
					<Link to="/">
						<button>Вернуться</button>
					</Link>
				</>
			) : (
				<>
					<label className={styles.label}>
						<h2>Login</h2>
						<input
							type="login"
							value={loginValue}
							onChange={evt => setLoginValue(evt.target.value)}
						/>
					</label>
					<label className={styles.label}>
						<h2>Password</h2>
						<input
							type="password"
							value={passwordValue}
							onChange={evt => setPasswordValue(evt.target.value)}
						/>
					</label>

					<button>Login</button>
				</>
			)}
		</form>
	);
}

export default Login;
