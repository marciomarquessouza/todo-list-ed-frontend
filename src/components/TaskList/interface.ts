import { ITask } from '../../types/tasks';

export interface ITaskList {
	tasks: ITask[];
	onTaskComplete?: (id: number) => void;
	onTaskRemove?: (id: number) => void;
}
