import * as actions from '../actions/actionsTypes/signInActionsTypes';
import { IUser } from '../../types/user';

interface ISignInState {
	isLoading: boolean;
	user: IUser;
}

const initialState: ISignInState = {
	isLoading: false,
	user: {
		id: 0,
		name: '',
		email: '',
	},
};

export const signInReducer = (
	state: ISignInState = initialState,
	action: actions.SignInAction,
): ISignInState => {
	switch (action.type) {
		case actions.SIGN_IN_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.SIGN_IN_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case actions.SIGN_IN_ERROR:
			return {
				...state,
				isLoading: false,
			};
		case actions.PROFILE_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.PROFILE_SUCCESS:
			return {
				...state,
				user: action.user,
				isLoading: false,
			};
		case actions.PROFILE_ERROR:
			return {
				...state,
				isLoading: false,
			};
		default:
			return {
				...state,
			};
	}
};
