import { combineReducers } from 'redux';
import { signInReducer } from './signInReducer';
import { signUpReducer } from './signUpReducer';
import { alertReducer } from './alertReducer';
import { projectReducer } from './projectReducer';
import { taskReducer } from './taskReducer';

const rootReducer = combineReducers({
	signIn: signInReducer,
	signup: signUpReducer,
	alert: alertReducer,
	project: projectReducer,
	task: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
