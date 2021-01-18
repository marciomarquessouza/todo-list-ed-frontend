import { ITask } from '../../types/tasks';
import * as actions from '../actions/actionsTypes/tasksActionsTypes';

interface ITaskState {
	status: 'idle' | 'creating' | 'loading' | 'updating' | 'deleting';
	tasks: ITask[];
}

const initialState: ITaskState = {
	status: 'idle',
	tasks: [],
};

export const taskReducer = (
	state: ITaskState = initialState,
	action: actions.TaskAction,
): ITaskState => {
	switch (action.type) {
		case actions.CREATE_TASK_REQUEST:
			return {
				...state,
				status: 'creating',
			};
		case actions.GET_TASKS_REQUEST:
			return {
				...state,
				status: 'loading',
			};
		case actions.COMPLETE_TASK_REQUEST:
			return {
				...state,
				status: 'updating',
			};
		case actions.REMOVE_TASK_REQUEST:
			return {
				...state,
				status: 'deleting',
			};
		case actions.CREATE_TASK_SUCCESS:
			return {
				...state,
				status: 'idle',
				tasks: [...state.tasks, action.task],
			};
		case actions.GET_TASKS_SUCCESS:
			return {
				...state,
				tasks: action.tasks,
				status: 'idle',
			};
		case actions.COMPLETE_TASK_SUCCESS:
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.task.id ? action.task : task,
				),
				status: 'idle',
			};
		case actions.REMOVE_TASK_SUCCESS:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.id),
				status: 'idle',
			};
		case actions.CREATE_TASK_ERROR:
		case actions.GET_TASKS_ERROR:
		case actions.COMPLETE_TASK_ERROR:
		case actions.REMOVE_TASK_ERROR:
			return {
				...state,
				status: 'idle',
			};
		default:
			return {
				...state,
			};
	}
};
