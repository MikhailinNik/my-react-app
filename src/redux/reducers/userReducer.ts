import { IS_AUTH, IS_AUTH_LOCAL_STORAGE, LOG_OUT } from '../actions';

const initialState = {
	users: [
		{
			login: '123',
			password: '123',
		},
	],
	isAuth: false,
};

export function auth(state = initialState, { type, payload }: any) {
	switch (type) {
		case IS_AUTH:
			debugger;
			let isUserFind = false;
			state.users.forEach(user => {
				if (payload.login === user.login && payload.password === user.password) {
					return (isUserFind = true);
				}
			});
			console.log('isUserFind: ', isUserFind);
			return { ...state, isAuth: isUserFind };

		case IS_AUTH_LOCAL_STORAGE:
			return { ...state, isAuth: payload };

		case LOG_OUT:
			return { ...state, isAuth: false };

		default:
			return state;
	}
}
