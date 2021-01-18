import { IProject } from '../../../types/projects';

export const CREATE_PROJECT_REQUEST = 'projects/create_project_request';

export interface ICreateProjectRequestAction {
	readonly type: typeof CREATE_PROJECT_REQUEST;
	title: string;
}

export const CREATE_PROJECT_SUCCESS = 'projects/create_project_success';

export interface ICreateProjectSuccessAction {
	readonly type: typeof CREATE_PROJECT_SUCCESS;
	project: IProject;
}

export const CREATE_PROJECT_ERROR = 'projects/create_project_error';

export interface ICreateProjectError {
	readonly type: typeof CREATE_PROJECT_ERROR;
}

export const GET_PROJECTS_REQUEST = 'projects/get_projects_request';

export interface IGetProjectsRequestAction {
	readonly type: typeof GET_PROJECTS_REQUEST;
}

export const GET_PROJECTS_SUCCESS = 'projects/get_projects_success';

export interface IGetProjectsSuccessAction {
	readonly type: typeof GET_PROJECTS_SUCCESS;
	projects: IProject[];
}

export const GET_PROJECTS_ERROR = 'projects/get_projects_error';

export interface IGetProjectsError {
	readonly type: typeof GET_PROJECTS_ERROR;
}

export type ProjectAction =
	| ICreateProjectSuccessAction
	| ICreateProjectRequestAction
	| ICreateProjectError
	| IGetProjectsRequestAction
	| IGetProjectsSuccessAction
	| IGetProjectsError;
