import request from '../../api/requests';
import { ITask } from '../../types/tasks';
import { getToken } from '../sessionsServices';

export const createTask = async (
	title: string,
	projectId: number,
): Promise<ITask> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		const task = await request.post<ITask>({
			url: '/tasks',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: {
				title,
				projectId,
			},
		});

		return task;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getTasks = async (): Promise<ITask[]> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		const tasks = await request.get<ITask[]>({
			url: '/tasks',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return tasks;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const completeTasks = async (id: number): Promise<ITask> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		const task = await request.patch<ITask>({
			url: `/tasks/${id}/DONE`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return task;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const removeTask = async (id: number): Promise<void> => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No token available');
		}

		await request.remove({
			url: `/tasks/${id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		throw new Error(error.message);
	}
};
