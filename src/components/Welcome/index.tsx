import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	LogoWelcomeContainer,
	StartButtonContainer,
	WelcomeH1,
} from './styles';
import { Button } from '../Button';
import { Logo } from '../../assets/svg';
import { IWelcome } from './interface';

export const Welcome = ({ onPress }: IWelcome) => {
	const { t } = useTranslation();
	return (
		<>
			<LogoWelcomeContainer>
				<Logo />
				<WelcomeH1>{t('welcome')}</WelcomeH1>
			</LogoWelcomeContainer>
			<StartButtonContainer>
				<Button onClick={onPress} variant="rounded" data-test="start-now">
					{t('startNow')}
				</Button>
			</StartButtonContainer>
		</>
	);
};
