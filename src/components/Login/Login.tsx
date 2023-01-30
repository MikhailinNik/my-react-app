import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../ts/hooks';

import { Link } from 'react-router-dom';

import { auth } from '../../redux/actions';

import styles from './Login.module.scss';

import { useEffect } from 'react';

function Login() {
	const dispatch = useAppDispatch();
	const { isAuth } = useAppSelector(state => state.users);
	const [loginValue, setLoginValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	useEffect(() => {
		if (isAuth) {
			localStorage.setItem('isAuth', isAuth);
		}
	}, [isAuth]);

	const submit = (evt: any) => {
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
