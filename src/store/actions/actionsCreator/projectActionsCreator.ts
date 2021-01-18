import { IProject } from '../../../types/projects';
import * as actions from '../actionsTypes/projectsActionsTypes';

export const createProjectRequest = (
	title: string,
): actions.ICreateProjectRequestAction => ({
	type: actions.CREATE_PROJECT_REQUEST,
	title,
});

export const createProjectSuccess = (
	project: IProject,
): actions.ICreateProjectSuccessAction => ({
	type: actions.CREATE_PROJECT_SUCCESS,
	project,
});

export const createProjectError = (): actions.ICreateProjectError => ({
	type: actions.CREATE_PROJECT_ERROR,
});
