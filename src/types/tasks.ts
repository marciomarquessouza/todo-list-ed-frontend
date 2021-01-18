export enum TaskStatus {
	OPEN = 'OPEN',
	DONE = 'DONE',
}

export interface ITask {
	id: number;
	title: string;
	description: string;
	status: TaskStatus;
	createdAt: Date;
	finishedAt: Date;
	projectId: number;
}
