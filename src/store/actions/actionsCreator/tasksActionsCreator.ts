import { ITask } from '../../../types/tasks';
import * as actions from '../actionsTypes/tasksActionsTypes';

export const createTaskRequest = (
	title: string,
	projectId: number,
): actions.ICreateTaskRequestAction => ({
	type: actions.CREATE_TASK_REQUEST,
	title,
	projectId,
});

export const createTaskSuccess = (
	task: ITask,
): actions.ICreateTaskSuccessAction => ({
	type: actions.CREATE_TASK_SUCCESS,
	task,
});

export const createTaskError = (): actions.ICreateTaskError => ({
	type: actions.CREATE_TASK_ERROR,
});

export const getTasksRequest = (): actions.IGetTasksRequestAction => ({
	type: actions.GET_TASKS_REQUEST,
});

export const getTasksSuccess = (
	tasks: ITask[],
): actions.IGetTasksSuccessAction => ({
	type: actions.GET_TASKS_SUCCESS,
	tasks,
});

export const getTasksError = (): actions.IGetTasksError => ({
	type: actions.GET_TASKS_ERROR,
});

export const completeTaskRequest = (
	id: number,
): actions.ICompleteTaskRequestAction => ({
	type: actions.COMPLETE_TASK_REQUEST,
	id,
});

export const completeTaskSuccess = (
	task: ITask,
): actions.ICompleteTaskSuccessAction => ({
	type: actions.COMPLETE_TASK_SUCCESS,
	task,
});

export const completeTaskError = (): actions.ICompleteTaskError => ({
	type: actions.COMPLETE_TASK_ERROR,
});

export const removeTaskRequest = (
	id: number,
): actions.IRemoveTaskRequestAction => ({
	type: actions.REMOVE_TASK_REQUEST,
	id,
});

export const removeTaskSuccess = (
	id: number,
): actions.IRemoveTaskSuccessAction => ({
	type: actions.REMOVE_TASK_SUCCESS,
	id,
});

export const removeTaskError = (): actions.IRemoveTaskError => ({
	type: actions.REMOVE_TASK_ERROR,
});
