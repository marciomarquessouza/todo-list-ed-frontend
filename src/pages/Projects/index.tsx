import React, { useEffect } from 'react';
import { ProjectHeader } from '../../components/ProjectHeader';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actionsCreator/signInActionsCreator';
import { AppState } from '../../store/reducers/rootReducer';
import { signOut } from '../../services/signOutServices';

export const Projects = () => {
	const dispatch = useDispatch();
	const { isLoading, user } = useSelector(
		(appState: AppState) => appState.signIn,
	);

	useEffect(() => {
		dispatch(actions.profileRequest());
	}, [dispatch]);

	return (
		<>
			<ProjectHeader
				name={user.name}
				onLogout={signOut}
				isLoading={isLoading}
			/>
		</>
	);
};
