import { IProject } from '../../types/projects';
import * as actions from '../actions/actionsTypes/projectsActionsTypes';

interface IProjectState {
	isLoading: boolean;
	projects: IProject[];
}

const initialState: IProjectState = {
	isLoading: false,
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
				isLoading: true,
			};
		case actions.CREATE_PROJECT_SUCCESS:
			return {
				...state,
				isLoading: false,
				projects: [...state.projects, action.project],
			};
		case actions.CREATE_PROJECT_ERROR:
			return {
				...state,
				isLoading: false,
			};
		default:
			return {
				...state,
			};
	}
};
