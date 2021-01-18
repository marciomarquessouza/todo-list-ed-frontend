import { ITask } from '../../../types/tasks';

export const CREATE_TASK_REQUEST = 'tasks/create_task_request';

export interface ICreateTaskRequestAction {
	readonly type: typeof CREATE_TASK_REQUEST;
	title: string;
	projectId: number;
}

export const CREATE_TASK_SUCCESS = 'tasks/create_task_success';

export interface ICreateTaskSuccessAction {
	readonly type: typeof CREATE_TASK_SUCCESS;
	task: ITask;
}

export const CREATE_TASK_ERROR = 'tasks/create_task_error';

export interface ICreateTaskError {
	readonly type: typeof CREATE_TASK_ERROR;
}

export const GET_TASKS_REQUEST = 'tasks/get_tasks_request';

export interface IGetTasksRequestAction {
	readonly type: typeof GET_TASKS_REQUEST;
}

export const GET_TASKS_SUCCESS = 'tasks/get_tasks_success';

export interface IGetTasksSuccessAction {
	readonly type: typeof GET_TASKS_SUCCESS;
	tasks: ITask[];
}

export const GET_TASKS_ERROR = 'tasks/get_tasks_error';

export interface IGetTasksError {
	readonly type: typeof GET_TASKS_ERROR;
}

export const COMPLETE_TASK_REQUEST = 'tasks/complete_task_request';

export interface ICompleteTaskRequestAction {
	readonly type: typeof COMPLETE_TASK_REQUEST;
	id: number;
}

export const COMPLETE_TASK_SUCCESS = 'tasks/complete_task_success';

export interface ICompleteTaskSuccessAction {
	readonly type: typeof COMPLETE_TASK_SUCCESS;
	task: ITask;
}

export const COMPLETE_TASK_ERROR = 'tasks/complete_task_error';

export interface ICompleteTaskError {
	readonly type: typeof COMPLETE_TASK_ERROR;
}

export const REMOVE_TASK_REQUEST = 'tasks/remove_task_request';

export interface IRemoveTaskRequestAction {
	readonly type: typeof REMOVE_TASK_REQUEST;
	id: number;
}

export const REMOVE_TASK_SUCCESS = 'tasks/remove_task_success';

export interface IRemoveTaskSuccessAction {
	readonly type: typeof REMOVE_TASK_SUCCESS;
	id: number;
}

export const REMOVE_TASK_ERROR = 'tasks/remove_task_error';

export interface IRemoveTaskError {
	readonly type: typeof REMOVE_TASK_ERROR;
}

export type TaskAction =
	| ICreateTaskSuccessAction
	| ICreateTaskRequestAction
	| ICreateTaskError
	| IGetTasksRequestAction
	| IGetTasksSuccessAction
	| IGetTasksError
	| ICompleteTaskSuccessAction
	| ICompleteTaskRequestAction
	| ICompleteTaskError
	| IRemoveTaskRequestAction
	| IRemoveTaskSuccessAction
	| IRemoveTaskError;
