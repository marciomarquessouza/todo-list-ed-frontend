import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IProjectHeader } from './interface';
import { Logo } from '../../assets/svg';
import { Container, ProfileContainer, NameStyle } from './styles';
import { Menu, MenuItem, Button } from '@material-ui/core';
import Loader from 'react-loader-spinner';

export const ProjectHeader = ({
	onLogout,
	name,
	isLoading,
}: IProjectHeader) => {
	const { t } = useTranslation();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		handleClose();
		onLogout();
	};

	return (
		<Container>
			<Logo />
			<ProfileContainer>
				<Button
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}>
					{isLoading ? (
						<Loader type="Puff" color="#000" height={20} width={20} />
					) : (
						<NameStyle>{name}</NameStyle>
					)}
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}>
					<MenuItem onClick={handleLogout}>{t('logout')}</MenuItem>
				</Menu>
			</ProfileContainer>
		</Container>
	);
};
