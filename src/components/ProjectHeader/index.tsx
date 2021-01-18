import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProjectHeader } from './interface';
import { Logo } from '../../assets/svg';
import { LinkButton } from '../LinkButton';
import { Container, ProfileContainer, NameStyle } from './styles';

export const ProjectHeader = ({ onLogout, name }: IProjectHeader) => {
	const { t } = useTranslation();

	return (
		<Container>
			<Logo />
			<ProfileContainer>
				<NameStyle>{`${name} | `}</NameStyle>
			</ProfileContainer>
		</Container>
	);
};
