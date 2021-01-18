import request from '../../api/requests';
import { IUser } from '../../types/user';
import { setToken, getToken } from '../sessionsServices';

interface ISignInProps {
	email: string;
	password: string;
}

export interface ISignInResponse {
	accessToken: string;
}

export const signIn = async ({
	email,
	password,
}: ISignInProps): Promise<ISignInResponse> => {
	try {
		const { accessToken } = await request.post<ISignInResponse>({
			url: '/auth/signin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email,
				password,
			},
		});

		setToken(accessToken);
		return { accessToken };
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getProfile = async (): Promise<IUser> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}
		const user = await request.get<IUser>({
			url: '/auth/profile',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return user;
	} catch (error) {
		throw new Error(error.message);
	}
};
