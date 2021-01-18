import request from '../../api/requests';
import { IProject } from '../../types/projects';
import { getToken } from '../sessionsServices';

export const createProject = async (title: string): Promise<IProject> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		const project = await request.post<IProject>({
			url: '/projects',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: {
				title,
			},
		});

		return project;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getProjects = async (): Promise<IProject[]> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		const projects = await request.get<IProject[]>({
			url: '/projects',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return projects;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const setProject = async (id: number): Promise<IProject> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		const project = await request.put<IProject>({
			url: `/projects/${id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return project;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const removeProject = async (id: number): Promise<void> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		await request.remove({
			url: `/projects/${id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		throw new Error(error.message);
	}
};
