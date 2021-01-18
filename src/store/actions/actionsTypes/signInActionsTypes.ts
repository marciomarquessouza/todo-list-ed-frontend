import { IUser } from '../../../types/user';

export const SIGN_IN_REQUEST = 'signin/signin_request';

export interface ISignInRequesAction {
	readonly type: typeof SIGN_IN_REQUEST;
	email: string;
	password: string;
}

export const SIGN_IN_SUCCESS = 'signin/signin_success';

export interface ISignInSuccessAction {
	readonly type: typeof SIGN_IN_SUCCESS;
}

export const SIGN_IN_ERROR = 'signin/signin_error';

export interface ISignInErrorAction {
	readonly type: typeof SIGN_IN_ERROR;
}

export const PROFILE_REQUEST = 'signin/profile_request';

export interface IProfileRequesAction {
	readonly type: typeof PROFILE_REQUEST;
}

export const PROFILE_SUCCESS = 'signin/profile_success';

export interface IProfileSuccessAction {
	readonly type: typeof PROFILE_SUCCESS;
	user: IUser;
}

export const PROFILE_ERROR = 'signin/profile_error';

export interface IProfileErrorAction {
	readonly type: typeof PROFILE_ERROR;
}

export type SignInAction =
	| ISignInRequesAction
	| ISignInSuccessAction
	| ISignInErrorAction
	| IProfileRequesAction
	| IProfileSuccessAction
	| IProfileErrorAction;
