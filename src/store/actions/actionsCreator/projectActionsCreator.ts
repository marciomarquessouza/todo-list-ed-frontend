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

export const getProjectsRequest = (): actions.IGetProjectsRequestAction => ({
	type: actions.GET_PROJECTS_REQUEST,
});

export const getProjectsSuccess = (
	projects: IProject[],
): actions.IGetProjectsSuccessAction => ({
	type: actions.GET_PROJECTS_SUCCESS,
	projects,
});

export const getProjectsError = (): actions.IGetProjectsError => ({
	type: actions.GET_PROJECTS_ERROR,
});
