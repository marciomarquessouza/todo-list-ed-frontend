import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as projectActions from '../actions/actionsCreator/projectActionsCreator';
import * as projectActionsTypes from '../actions/actionsTypes/projectsActionsTypes';
import * as alertActions from '../actions/actionsCreator/alertActionsCreator';
import * as services from '../../services/projectServices';

function* onCreateProject({
	title,
}: projectActionsTypes.ICreateProjectRequestAction) {
	try {
		const project = yield call(services.createProject, title);
		yield put(projectActions.createProjectSuccess(project));
	} catch (error) {
		yield put(projectActions.createProjectError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnCreateProject() {
	yield takeLatest(projectActionsTypes.CREATE_PROJECT_REQUEST, onCreateProject);
}

function* onGetProjects() {
	try {
		const projects = yield call(services.getProjects);
		yield put(projectActions.getProjectsSuccess(projects));
	} catch (error) {
		yield put(projectActions.getProjectsError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnGetProjects() {
	yield takeLatest(projectActionsTypes.GET_PROJECTS_REQUEST, onGetProjects);
}

export default function* signInSaga() {
	yield all([fork(watchOnCreateProject), fork(watchOnGetProjects)]);
}
