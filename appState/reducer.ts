import { getStore } from '../helpers/localStore/localStore';
import { SET_DATA, SET_TOGGLE } from './actions';

export const initialState: any = {
	set: {
		currentUser: getStore(),
		userById: null,
		username: '',
		email: '',
		password: '',
		otpCode: '',
		oldPassword: '',
		confirmPassword: '',
		file: [],
	},
	toggle: {},
};

export const setData = (payload: any) => {
	return {
		type: SET_DATA,
		payload,
	};
};

export const toogle = (payload: any) => {
	return {
		type: SET_TOGGLE,
		payload,
	};
};

export default function reducer(state = initialState, action: any) {
	switch (action?.type) {
		case SET_DATA:
			return {
				...state,
				set: {
					...state.set,
					...action.payload,
				},
			};
		case SET_TOGGLE:
			return {
				...state,
				toogle: {
					...state.toggle,
					...action.payload,
				},
			};
		default:
			return state;
	}
}
