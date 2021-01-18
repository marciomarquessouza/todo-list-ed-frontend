import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as taskActions from '../actions/actionsCreator/tasksActionsCreator';
import * as taskActionsTypes from '../actions/actionsTypes/tasksActionsTypes';
import * as alertActions from '../actions/actionsCreator/alertActionsCreator';
import * as services from '../../services/taskServices';

function* onCreateTask({
	title,
	projectId,
}: taskActionsTypes.ICreateTaskRequestAction) {
	try {
		const task = yield call(services.createTask, title, projectId);
		yield put(taskActions.createTaskSuccess(task));
	} catch (error) {
		yield put(taskActions.createTaskError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnCreateTask() {
	yield takeLatest(taskActionsTypes.CREATE_TASK_REQUEST, onCreateTask);
}

function* onGetTasks() {
	try {
		const tasks = yield call(services.getTasks);
		yield put(taskActions.getTasksSuccess(tasks));
	} catch (error) {
		yield put(taskActions.getTasksError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnGetTasks() {
	yield takeLatest(taskActionsTypes.GET_TASKS_REQUEST, onGetTasks);
}

function* onCompleteTask({ id }: taskActionsTypes.ICompleteTaskRequestAction) {
	try {
		const task = yield call(services.completeTasks, id);
		yield put(taskActions.completeTaskSuccess(task));
	} catch (error) {
		yield put(taskActions.completeTaskError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnCompleteTask() {
	yield takeLatest(taskActionsTypes.COMPLETE_TASK_REQUEST, onCompleteTask);
}

function* onRemoveTask({ id }: taskActionsTypes.IRemoveTaskRequestAction) {
	try {
		yield call(services.removeTask, id);
		yield put(taskActions.removeTaskSuccess(id));
	} catch (error) {
		yield put(taskActions.removeTaskError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnRemoveTask() {
	yield takeLatest(taskActionsTypes.REMOVE_TASK_REQUEST, onRemoveTask);
}

export default function* signInSaga() {
	yield all([
		fork(watchOnCreateTask),
		fork(watchOnGetTasks),
		fork(watchOnCompleteTask),
		fork(watchOnRemoveTask),
	]);
}
