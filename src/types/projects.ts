import { ITask } from './tasks';

export interface IProject {
	id: number;
	title: string;
	tasks: ITask[];
}
