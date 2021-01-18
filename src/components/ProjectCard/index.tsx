import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { IProjectCard } from './interface';
import { InputContainer, CardActionContainer, useStyles } from './styles';
import FormControl from '@material-ui/core/FormControl';
import { TaskList } from '../TaskList';
import Typography from '@material-ui/core/Typography';

export const ProjectCard = ({
	project,
	tasks,
	onCreateTask,
	onCompleteTask,
	onRemoveTask,
}: IProjectCard) => {
	const classes = useStyles();

	const [text, setText] = useState('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setText(value);
	};

	const handleSubmit = (event: React.ChangeEvent<any>) => {
		event.preventDefault();
		setText('');
		onCreateTask(text, project.id);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{project.id}
					</Avatar>
				}
				action={
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<EditIcon />
						</IconButton>
						<IconButton aria-label="share">
							<DeleteIcon />
						</IconButton>
					</CardActions>
				}
				title={project.title}
			/>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					To Do
				</Typography>
				<TaskList
					tasks={tasks.filter((task) => task.status === 'OPEN')}
					onTaskComplete={onCompleteTask}
					onTaskRemove={onRemoveTask}
				/>
				<Typography variant="h6" gutterBottom>
					Done
				</Typography>
				<TaskList tasks={tasks.filter((task) => task.status === 'DONE')} />
			</CardContent>
			<CardActionContainer>
				<form className={classes.textInput} noValidate autoComplete="off">
					<InputContainer>
						<FormControl fullWidth className={classes.margin}>
							<TextField label="Task" value={text} onChange={onChange} />
						</FormControl>
						<IconButton
							color="default"
							aria-label="add to shopping cart"
							onClick={handleSubmit}>
							<AddIcon />
						</IconButton>
					</InputContainer>
				</form>
			</CardActionContainer>
		</Card>
	);
};
