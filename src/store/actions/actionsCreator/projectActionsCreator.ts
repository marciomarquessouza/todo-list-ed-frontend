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

export const setProjectRequest = (
	id: number,
): actions.ISetProjectRequestAction => ({
	type: actions.SET_PROJECT_REQUEST,
	id,
});

export const setProjectSuccess = (
	project: IProject,
): actions.ISetProjectSuccessAction => ({
	type: actions.SET_PROJECT_SUCCESS,
	project,
});

export const setProjectError = (): actions.ISetProjectError => ({
	type: actions.SET_PROJECT_ERROR,
});

export const removeProjectRequest = (
	id: number,
): actions.IRemoveProjectRequestAction => ({
	type: actions.REMOVE_PROJECT_REQUEST,
	id,
});

export const removeProjectSuccess = (
	id: number,
): actions.IRemoveProjectSuccessAction => ({
	type: actions.REMOVE_PROJECT_SUCCESS,
	id,
});

export const removeProjectError = (): actions.IRemoveProjectError => ({
	type: actions.REMOVE_PROJECT_ERROR,
});
