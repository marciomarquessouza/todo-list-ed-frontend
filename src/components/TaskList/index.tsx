import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import { ITaskList } from './interface';
import { useStyles } from './styles';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';

export const TaskList = ({
	tasks,
	onTaskComplete,
	onTaskRemove,
}: ITaskList) => {
	const classes = useStyles();

	const handleToggle = (id: number) => () => {
		if (onTaskComplete) {
			onTaskComplete(id);
		}
	};

	return (
		<List className={classes.root}>
			{tasks.map((task) => {
				const labelId = `checkbox-list-label-${task.id}`;
				const isCompleted = task.status === 'DONE';
				return (
					<ListItem
						key={task.id}
						role={undefined}
						dense
						button
						onClick={handleToggle(task.id)}>
						<ListItemIcon>
							<Checkbox
								edge="start"
								checked={isCompleted}
								disabled={isCompleted}
								tabIndex={-1}
								disableRipple
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemIcon>
						<Tooltip
							title={
								isCompleted
									? `finished at: ${moment(task.finishedAt).format(
											'DD/MM/YYYY',
									  )}`
									: `started at: ${moment(task.createdAt).format('DD/MM/YYYY')}`
							}>
							<ListItemText id={labelId} primary={task.title} />
						</Tooltip>
						<ListItemSecondaryAction>
							{!isCompleted && (
								<IconButton
									edge="end"
									aria-label="comments"
									onClick={() => onTaskRemove && onTaskRemove(task.id)}>
									<RemoveCircle />
								</IconButton>
							)}
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};
