import { combineReducers } from 'redux';
import { signInReducer } from './signInReducer';
import { signUpReducer } from './signUpReducer';
import { alertReducer } from './alertReducer';
import { projectReducer } from './projectReducer';

const rootReducer = combineReducers({
	signIn: signInReducer,
	signup: signUpReducer,
	alert: alertReducer,
	project: projectReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
