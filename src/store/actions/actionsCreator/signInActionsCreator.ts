import * as actions from '../actionsTypes/signInActionsTypes';
import { IUser } from '../../../types/user';

export const signInRequest = (
	email: string,
	password: string,
): actions.ISignInRequesAction => ({
	type: actions.SIGN_IN_REQUEST,
	email,
	password,
});

export const signInSuccess = (): actions.ISignInSuccessAction => ({
	type: actions.SIGN_IN_SUCCESS,
});

export const signInError = (): actions.ISignInErrorAction => ({
	type: actions.SIGN_IN_ERROR,
});

export const profileRequest = (): actions.IProfileRequesAction => ({
	type: actions.PROFILE_REQUEST,
});

export const profileSuccess = (user: IUser): actions.IProfileSuccessAction => ({
	type: actions.PROFILE_SUCCESS,
	user,
});

export const profileError = (): actions.IProfileErrorAction => ({
	type: actions.PROFILE_ERROR,
});
