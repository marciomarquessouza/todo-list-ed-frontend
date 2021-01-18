import { IProject } from '../../types/projects';
import * as actions from '../actions/actionsTypes/projectsActionsTypes';

interface IProjectState {
	status: 'idle' | 'creating' | 'loading' | 'updating' | 'deleting';
	projects: IProject[];
}

const initialState: IProjectState = {
	status: 'idle',
	projects: [],
};

export const projectReducer = (
	state: IProjectState = initialState,
	action: actions.ProjectAction,
): IProjectState => {
	switch (action.type) {
		case actions.CREATE_PROJECT_REQUEST:
			return {
				...state,
				status: 'creating',
			};
		case actions.GET_PROJECTS_REQUEST:
			return {
				...state,
				status: 'loading',
			};
		case actions.SET_PROJECT_REQUEST:
			return {
				...state,
				status: 'updating',
			};
		case actions.REMOVE_PROJECT_REQUEST:
			return {
				...state,
				status: 'deleting',
			};
		case actions.CREATE_PROJECT_SUCCESS:
			return {
				...state,
				status: 'idle',
				projects: [...state.projects, action.project],
			};
		case actions.GET_PROJECTS_SUCCESS:
			return {
				...state,
				projects: action.projects,
				status: 'idle',
			};
		case actions.SET_PROJECT_SUCCESS:
			return {
				...state,
				projects: state.projects.map((project) =>
					project.id === action.project.id ? action.project : project,
				),
				status: 'idle',
			};
		case actions.REMOVE_PROJECT_SUCCESS:
			return {
				...state,
				projects: state.projects.filter((project) => project.id !== action.id),
				status: 'idle',
			};
		case actions.CREATE_PROJECT_ERROR:
		case actions.GET_PROJECTS_ERROR:
		case actions.SET_PROJECT_ERROR:
		case actions.REMOVE_PROJECT_ERROR:
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
