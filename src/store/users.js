import * as actionTypes from './actions';
import Axios from 'axios';

export const editUser = (id, name, email) => {
	return (dispatch) => {
		const I = id - 1;
		Axios.patch(
			'https://redux-crud-898ea.firebaseio.com/users/' + I + '.json',
			{
				name: name,
				email: email,
			}
		).then((response) => {
			dispatch(initUser(id));
		});
	};
};

export const deleteUser = (id) => {
	return (dispatch) => {
		const I = id - 1;
		Axios.delete(
			'https://redux-crud-898ea.firebaseio.com/users/' + I + '.json'
		).then((response) => {
			dispatch(initUser(id));
		});
	};
};

export const setUsers = (users) => {
	return {
		type: actionTypes.GET_USERS,
		users: [...users],
	};
};

export const initUser = () => {
	return (dispatch) => {
		Axios.get('https://redux-crud-898ea.firebaseio.com/users.json').then(
			(response) => {
				dispatch(setUsers(response.data));
			}
		);
	};
};
