import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { defaultTheme } from '../../theme';

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const CardActionContainer = styled.div`
	margin: 0 20px;
`;

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 345,
			margin: 10,
		},
		margin: {
			margin: theme.spacing(1),
		},
		textInput: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: defaultTheme.colors.secondary,
		},
	}),
);
