import React, { useEffect } from 'react';
import { ProjectHeader } from '../../components/ProjectHeader';
import { ProjectForm } from '../../components/ProjectForm';
import { useDispatch, useSelector } from 'react-redux';
import * as signInActions from '../../store/actions/actionsCreator/signInActionsCreator';
import * as projectActions from '../../store/actions/actionsCreator/projectActionsCreator';
import { AppState } from '../../store/reducers/rootReducer';
import { signOut } from '../../services/signOutServices';

export const Projects = () => {
	const dispatch = useDispatch();
	const { isLoading: profileLoading, user } = useSelector(
		(appState: AppState) => appState.signIn,
	);

	const { isLoading: projectLoading, project } = useSelector(
		(appState: AppState) => appState.project,
	);

	useEffect(() => {
		dispatch(signInActions.profileRequest());
	}, [dispatch]);

	const handleSubmitNewProject = (title: string) => {
		dispatch(projectActions.createProjectRequest(title));
	};

	return (
		<>
			<ProjectHeader
				name={user.name}
				onLogout={signOut}
				isLoading={profileLoading}
			/>
			<ProjectForm
				onProjectSubmit={handleSubmitNewProject}
				isLoading={projectLoading}
			/>
		</>
	);
};
