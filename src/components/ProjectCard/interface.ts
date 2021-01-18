import { IProject } from '../../types/projects';
import { ITask } from '../../types/tasks';

export interface IProjectCard {
	project: IProject;
	tasks: ITask[];
	onCreateTask: (title: string, projectId: number) => void;
	onCompleteTask: (id: number) => void;
	onRemoveTask: (id: number) => void;
}
