import * as actiontypes from './actions';

const initialState = {
	users: [
		{
			id: '',
			name: 'Loading',
			email: '',
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actiontypes.DELETE_USER:
			return { ...state };
		case actiontypes.EDIT_USER:
			return { ...state };
		case actiontypes.GET_USERS:
			return {
				users: action.users,
			};
		default:
			return state;
	}
};

export default reducer;
