import React, { useEffect } from 'react';
import { ProjectHeader } from '../../components/ProjectHeader';
import { ProjectForm } from '../../components/ProjectForm';
import { ProjectCard } from '../../components/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import * as signInActions from '../../store/actions/actionsCreator/signInActionsCreator';
import * as projectActions from '../../store/actions/actionsCreator/projectActionsCreator';
import * as taskActions from '../../store/actions/actionsCreator/tasksActionsCreator';
import { AppState } from '../../store/reducers/rootReducer';
import { signOut } from '../../services/signOutServices';
import { ProjectListContainer } from './styles';

export const Projects = () => {
	const dispatch = useDispatch();
	const { isLoading: profileLoading, user } = useSelector(
		(appState: AppState) => appState.signIn,
	);
	const { status, projects } = useSelector(
		(appState: AppState) => appState.project,
	);

	const { tasks } = useSelector((appState: AppState) => appState.task);

	useEffect(() => {
		dispatch(signInActions.profileRequest());
		dispatch(projectActions.getProjectsRequest());
		dispatch(taskActions.getTasksRequest());
	}, [dispatch]);

	const handleSubmitNewProject = (title: string) => {
		dispatch(projectActions.createProjectRequest(title));
	};

	const handleSubmitNewTask = (title: string, projectId: number) => {
		dispatch(taskActions.createTaskRequest(title, projectId));
	};

	const handleCompleteTask = (id: number) => {
		dispatch(taskActions.completeTaskRequest(id));
	};

	const handleRemoveTask = (id: number) => {
		dispatch(taskActions.removeTaskRequest(id));
	};

	const handleRemoveProject = (id: number) => {
		dispatch(projectActions.removeProjectRequest(id));
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
				isLoading={status === 'creating'}
			/>
			<ProjectListContainer>
				{projects.map((project) => {
					const projectTasks = tasks.filter(
						(task) => task.projectId === project.id,
					);
					return (
						<ProjectCard
							key={project.id}
							project={project}
							tasks={projectTasks}
							onCreateTask={handleSubmitNewTask}
							onCompleteTask={handleCompleteTask}
							onRemoveTask={handleRemoveTask}
							onRemoveProject={handleRemoveProject}
						/>
					);
				})}
			</ProjectListContainer>
		</>
	);
};
