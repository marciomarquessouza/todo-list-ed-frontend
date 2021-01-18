import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as signInActions from '../actions/actionsCreator/signInActionsCreator';
import * as signInActionsTypes from '../actions/actionsTypes/signInActionsTypes';
import * as alertActions from '../actions/actionsCreator/alertActionsCreator';
import { signIn, getProfile } from '../../services/signInServices';
import history from '../../navigation/history';

function* onSignIn({
	email,
	password,
}: signInActionsTypes.ISignInRequesAction) {
	try {
		const { accessToken } = yield call(signIn, { email, password });

		if (accessToken) {
			history.push('/');
		} else {
			throw new Error('Error to access the system');
		}

		yield put(signInActions.signInSuccess());
	} catch (error) {
		yield put(signInActions.signInError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnSignIn() {
	yield takeLatest(signInActionsTypes.SIGN_IN_REQUEST, onSignIn);
}

function* onGetProfile() {
	try {
		const user = yield call(getProfile);
		yield put(signInActions.profileSuccess(user));
	} catch (error) {
		yield put(signInActions.profileError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnGetProfile() {
	yield takeLatest(signInActionsTypes.PROFILE_REQUEST, onGetProfile);
}

export default function* signInSaga() {
	yield all([fork(watchOnSignIn), fork(watchOnGetProfile)]);
}
