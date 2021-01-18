import { IProject } from '../../types/projects';
import * as actions from '../actions/actionsTypes/projectsActionsTypes';

interface IProjectState {
	status: 'idle' | 'creating' | 'loading';
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
		case actions.CREATE_PROJECT_ERROR:
		case actions.GET_PROJECTS_ERROR:
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
