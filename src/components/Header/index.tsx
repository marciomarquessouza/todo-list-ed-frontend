import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HeaderContainer, ButtonContainer, LogoContainer } from './styles';
import { Button } from '../Button';
import { IHeaderProps } from './interfaces';
import { Logo } from '../../assets/svg';

export const Header = ({ onLoginClick }: IHeaderProps) => {
	const { t } = useTranslation();

	return (
		<HeaderContainer>
			<Link to="/">
				<LogoContainer>
					<Logo />
				</LogoContainer>
			</Link>
			<ButtonContainer>
				<Button onClick={onLoginClick} data-test="header" variant="primary">
					{t('signUp')}
				</Button>
			</ButtonContainer>
		</HeaderContainer>
	);
};
